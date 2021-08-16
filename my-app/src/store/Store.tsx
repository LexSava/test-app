import { makeAutoObservable, autorun, set, toJS } from 'mobx';
import _ from 'lodash';
import { IBodyImg } from '../common/interfaces';

// eslint-disable-next-line
export function autoSave(_this: any, name: string) {
  const storedJson = localStorage.getItem(name);
  if (storedJson) {
    set(_this, JSON.parse(storedJson));
  }
  autorun(() => {
    const value = toJS(_this);
    localStorage.setItem(name, JSON.stringify(value));
  });
}

class Store {
  search: string = '';

  page: string = '1';

  pageWithImages: Array<IBodyImg> = [];

  likeImages: Array<IBodyImg> = [];

  public accessToken: string;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.accessToken = '';
    autoSave(this, 'authStore');
  }

  getSearchQuery(enteredSearch: string) {
    this.search = enteredSearch;
  }

  getpageWithImages(arr: Array<IBodyImg>) {
    this.pageWithImages = arr;
  }

  getLikeImages(elem: IBodyImg) {
    this.likeImages = _.uniqWith(this.likeImages.concat(elem), _.isEqual);
  }

  removedLikedImages(id: string) {
    this.likeImages = _.remove(this.likeImages, (item) => item.id !== id);
  }
}

export default new Store();
