import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { Field } from "../../schema/types";
import { Fields } from "./fields";
import editFields from "../../schema/edit";

function Right({ edit }: any) {
  const { selectedComp, updateSelected, setCodeTree, setSelectId } = edit;

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

  console.log("selectedComp", selectedComp);

  return (
    <div className="w-80 overflow-y-scroll">
      <div className="h-10 text-center font-medium border-b py-2">属性设置</div>
      <div className="p-3 text-xs">
        {selectedComp &&
          editFields[selectedComp.type].map((item) => {
            const { key, name } = item;

            return (
              <div key={key} className="flex items-center mb-2">
                <div>{name}</div>
                <div className="ml-2 flex-1">{renderField(item)}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default inject("edit")(observer(Right));
