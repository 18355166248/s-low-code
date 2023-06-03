import { getImagesList } from "@/services/images";
import { initListId } from "@/utils/common";
import { makeAutoObservable } from "mobx";

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

interface ImagesInterface {
  modalShow: boolean;
  filterParams: any;
  pagination: Pagination;
  list: List;
}

class ImagesModels implements ImagesInterface {
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

  modalDialogRef = { current: null };

  constructor() {
    makeAutoObservable(this);
    this.modalShow = false;
    this.filterParams = {};
    this.modalOption = {};
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

  // 获取列表
  getList = () => {
    this.list.pending = true;
    getImagesList({
      pageSize: this.pagination.pageSize,
      pageNo: this.pagination.current,
    })
      .then((res: any) => {
        this.list = {
          data: initListId(res.data) as any,
          pending: false,
          success: true,
          error: false,
        };
        this.pagination = { ...this.pagination, total: res.total };
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
    this.modalOption = option;
  };

  // 表格分页器触发
  onTableChange = (pagination: { current: number }) => {
    this.pagination = { ...this.pagination, current: pagination.current };
    this.getList();
  };
}

export const store = new ImagesModels();