import { getRoleList } from "@/services/role";
import { getUserList } from "@/services/user";
import { cloneDeep } from "lodash-es";
import { makeAutoObservable, toJS } from "mobx";

interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

interface Status {
  pending: boolean;
  success: boolean;
  error: boolean;
}

interface List extends Status {
  data: any[];
}

interface UserInterface {
  modalShow: boolean;
  filterParams: any;
  pagination: Pagination;
  list: List;
  roleList: { name: string; id: number }[];
}

class UserModels implements UserInterface {
  filterParams: any;
  modalShow: boolean;
  pagination: Pagination;
  modalOption: any;
  list = {
    pending: false,
    success: false,
    error: false,
    data: [],
  };
  roleList = [];

  modalDialogRef = { current: null };

  constructor() {
    makeAutoObservable(this);
    this.modalShow = false;
    this.filterParams = {};
    this.modalOption = { initialValues: {} };
    this.pagination = {
      current: 1,
      pageSize: 10,
      total: 0,
    };
  }

  // 新增/编辑/删除
  openModalHandle = () => {
    this.modalShow = true;
    (this.modalDialogRef.current as any).open();
  };
  closeModalHandle = () => {
    this.modalShow = false;
  };
  // 设置过滤器表单数据
  setFilterParams = (allValues: any) => {
    this.filterParams = allValues;
  };

  getParams = () => {
    return {
      ...this.filterParams,
      ...this.pagination,
      pageNo: this.pagination.current,
    };
  };

  initRoleList = () => {
    getRoleList().then((res: any) => {
      this.roleList = res;
    });
  };

  // 获取列表
  getList = () => {
    this.list.pending = true;

    getUserList(this.getParams())
      .then((res: any) => {
        this.list = {
          data: res.data,
          pending: false,
          success: true,
          error: false,
        };
        this.pagination = { ...this.pagination, total: res.totalSize };
      })
      .catch(() => {
        this.list.error = true;
        this.list.pending = false;
      });
  };

  resetPagination = () => {
    this.pagination.current = 1;
  };

  // 重置过滤器
  reset = () => {
    this.filterParams = {};
    this.resetPagination();
    this.getList();
  };

  // 设置传入modal的参数
  setModalOption = (option: any) => {
    option = cloneDeep(option);
    const roles = toJS(option.initialValues.roles);
    option.initialValues.roles = roles.map((v: any) => String(v.id));
    this.modalOption = option;
  };

  // 表格分页器触发
  onTableChange = (pagination: { current: number }) => {
    this.pagination = { ...this.pagination, current: pagination.current };
    this.getList();
  };
}

export const store = new UserModels();
