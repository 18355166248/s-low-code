export function trimObjectValues(params: any) {
  params instanceof Object &&
    Object.keys(params).forEach((key) => {
      if (typeof params[key] === "string") {
        params[key] = params[key].trim();
      }
    });
}

export function initListId(list: any[], regStrs?: string[], key = "id") {
  return list.map((item, index) => ({
    ...item,
    [key]: Array.isArray(regStrs)
      ? regStrs.reduce(
          (idStr: string, key: string) => idStr + (item[key] || key),
          ""
        )
      : index + 1,
  }));
}

export function initListIndex(
  list: any[],
  regStrs?: string[],
  key: string = "id"
) {
  return list.map((item, index) => ({
    ...item,
    [key]: Array.isArray(regStrs)
      ? regStrs.reduce(
          (idStr: string, key: string) => idStr + (item[key] || key),
          ""
        )
      : index,
  }));
}

export function initListIdWithPagination(list: any[], pagination: any) {
  const { pageNum, pageSize } = pagination;
  return list.map((item, index) => ({
    id: (pageNum - 1) * pageSize + index + 1,
    ...item,
  }));
}

export function initListIdWithChannelType(list: any[]) {
  return list.map((item) => ({
    id: item.channelTypeId + item.itemId,
    ...item,
  }));
}

export function queryParams() {
  let search = window.location.search;
  search = search[0] === "?" ? search.substring(1) : search;
  const query = search.split("&");

  return query.reduce((obj: any, item: string) => {
    const [key, value] = item.split("=");
    obj[key] = value;
    return obj;
  }, {});
}

export function deleteEmptyProperty(params: any) {
  params instanceof Object &&
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
      ) {
        delete params[key];
      }
    });
}

export function deleteEmptyPropertyFromArray(list: any[]) {
  if (!Array.isArray(list)) return;
  list.forEach((v: any) => {
    deleteEmptyProperty(v);
  });
}

// 清空缓存
export function clearLocalStorage() {
  localStorage.clear();
}
