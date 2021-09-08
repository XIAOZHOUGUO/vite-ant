import { defHttp } from '@/utils/http';

export function postMock() {
  return defHttp.request({
    url: '/api/getTest',
    method: 'post',
  });
}

export function getTableData(params: { page: number; size: number }) {
  return defHttp.request({
    url: '/api/list',
    method: 'get',
    params,
  });
}
