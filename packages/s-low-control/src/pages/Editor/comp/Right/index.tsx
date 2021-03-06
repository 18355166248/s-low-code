import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { editKey, Field } from "../../schema/types";
import { Fields } from "./fields";
import editField from "../../schema/edit";
import EditTitle from "@/components/EditTitle";

function Right({ edit }: any) {
  const { selectedComp, updateSelected, setCodeTree, setSelectId } = edit;

  const { list = [], subLabelWidth = 70 } =
    editField[selectedComp.type as editKey] || {};

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
              <div>{name}</div>
              <div className="ml-2 flex-1">{renderField(item)}</div>
            </div>
          );
      }
    });
  }

  return (
    <div className="w-80 overflow-y-scroll">
      <div className="h-10 text-center font-medium border-b py-2">属性设置</div>
      <div className="py-4 text-xs">
        {selectedComp.type && renderSetting(list)}
      </div>
    </div>
  );
}

export default inject("edit")(observer(Right));
