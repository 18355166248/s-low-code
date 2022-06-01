import { dfs } from "@/utils";
import { inject, observer } from "mobx-react";
import React from "react";
import { FieldNodeSchema } from "../../index.store";
import { Field } from "../../schema/types";
import { Fields } from "./fields";
import editFields from "../../schema/edit";

function Right({ edit }: any) {
  const { selectId, codeTree, updateSelected, refreshId } = edit;
  let selectedComp: FieldNodeSchema | undefined;

  dfs(codeTree, (curField: FieldNodeSchema) => {
    if (curField.id === selectId) {
      selectedComp = curField;
      return false;
    }
    return true;
  });

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

  function handlerChange(key: string, value: string) {
    updateSelected({
      key,
      value,
    });
  }

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
