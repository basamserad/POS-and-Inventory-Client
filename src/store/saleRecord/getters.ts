import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SaleRecordStateInterface } from './state';

const getters: GetterTree<SaleRecordStateInterface, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
