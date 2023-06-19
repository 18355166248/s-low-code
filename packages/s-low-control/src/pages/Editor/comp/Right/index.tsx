import { inject, observer } from "mobx-react";
import { Suspense, useEffect, useRef } from "react";
import { editKey, Field } from "../../schema/types";
import { Fields } from "./fields";
import editField from "../../schema/edit";
import EditTitle from "@/components/EditTitle";
import { initRemoteEdit } from "@/components/RemoteComp";
import { isObject } from "lodash-es";
import { useUpdate } from "ahooks";
// import "antd/dist/antd.css"; // TODO 因为组件仓库没有打包antd的css 所以这里全量引入

function Right({ edit }: any) {
  const { selectedComp, updateSelected, setCodeTree, setSelectId } = edit;
  const remoteEditData = useRef<Record<string, any>>({});
  const update = useUpdate();

  const { list = [], subLabelWidth = 70 } =
    editField[selectedComp.type as editKey] ||
    remoteEditData.current[selectedComp.type] ||
    {};

  useEffect(() => {
    const selectedCompRemote: any = selectedComp.remote;
    if (isObject(selectedCompRemote as any)) {
      initRemoteEdit(selectedCompRemote).then((remoteComp: any) => {
        if (!remoteEditData.current[selectedComp.type]) {
          remoteEditData.current[selectedComp.type] = remoteComp;
          update();
        }
      });
    }
  }, [selectedComp]);

  useEffect(() => {
    window.addEventListener("message", setSelected);

    return () => {
      window.removeEventListener("message", setSelected);
    };
  }, []);

  const renderField = (item: Field) => {
    const { key, name, type, ...other } = item;
    const Comp = Fields[type] as any;
    return (
      <Comp
        {...other}
        value={selectedComp?.props[key]}
        onChange={(value: any) => handlerChange(key, value)}
      />
    );
  };

  function setSelected(e: any) {
    const { data = {} } = e;
    const { type, params } = data;
    if (params) {
      switch (type) {
        case "updateCodeTree":
          setCodeTree(params);
          break;
        case "selectId":
          setSelectId(params);
          break;
        default:
          break;
      }
    }
  }

  function handlerChange(key: string, value: string) {
    updateSelected({
      key,
      value,
    });
  }

  // 渲染编辑属性组件
  function renderSetting(editSettingList: any[]) {
    return editSettingList.map((item) => {
      const { key, name, children, type, component: Com } = item;
      switch (type) {
        case "title":
          return (
            <div key={key}>
              <EditTitle key={key} {...item} />
              <div className="px-4 py-5">
                {Array.isArray(children) && renderSetting(children)}
              </div>
            </div>
          );

        case "custom":
          return (
            <div key={key} className="flex items-center mb-2">
              <div style={{ width: subLabelWidth }}>{name}</div>
              <div className="ml-2 flex-1">
                {Com ? (
                  <Com
                    {...item}
                    value={selectedComp?.props[key]}
                    onChange={(value: any) => handlerChange(key, value)}
                  />
                ) : (
                  renderField(item)
                )}
              </div>
            </div>
          );

        default:
          return (
            <div key={key} className="flex items-center mb-2">
              <div style={{ width: subLabelWidth }}>{name}</div>
              <div className="ml-2 flex-1">{renderField(item)}</div>
            </div>
          );
      }
    });
  }

  return (
    <div className="w-80 overflow-y-scroll">
      <div className="leading-6 text-center font-medium border-b py-4">
        属性设置
      </div>
      <Suspense>
        <div className="text-xs">
          {selectedComp.type && renderSetting(list)}
        </div>
      </Suspense>
    </div>
  );
}

export default inject("edit")(observer(Right));
