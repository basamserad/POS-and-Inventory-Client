import { Inventory } from 'src/interfaces/inventory.interface';
import inventoryService from 'src/services/inventory.service';
import { InventoryDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { InventoryStateInterface } from './state';

const actions: ActionTree<InventoryStateInterface, StateInterface> = {
  async addInventory(context, payload: InventoryDto): Promise<void> {
    const result = await inventoryService.create(payload);
    context.commit('setNewInventory', result);
    await context.dispatch('getAllInventory');
  },

  async editInventory(context, payload: any): Promise<any> {
    const result = await inventoryService.update(payload.itemCode, payload);
    context.commit('updateInventory', result);
    await context.dispatch('getAllInventory');
  },

  async deleteInventory(context, itemCode: string): Promise<any> {
    const result = await inventoryService.delete(itemCode);
    context.commit('deleteInventory', result);
  },

  async getAllInventory(context): Promise<any> {
    const res = await inventoryService.getAll();
    context.commit('getAllInventory', res);
    await this.dispatch('inventoryCategory/getAllInventoryCategory');
  },

  async getOneInventory(context, id: string): Promise<any> {
    const res = await inventoryService.getOne(id);
    context.commit('getOneInventory', res);
  },
};

export default actions;
