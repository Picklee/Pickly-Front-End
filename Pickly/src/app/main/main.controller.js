export class MainController {
  constructor ($timeout, webDevTec, toastr, $http) {
    'ngInject';
    this.http=$http;
    this.tabIndex=0;

    this.getCaraouselData();
    this.getBlogData();
  }

  getCaraouselData()
  {
    this.http.get('app/main/data.json')
    .then( (jsonData) => {
      this.sliderImages = jsonData.data.slider;
    })
  }

  getBlogData()
  {
    this.http.get('app/main/data.json')
    .then( (jsonData) => {
      this.blogCards = jsonData.data.blogs;
    })
  }

  changeTabIndex(index)
  {
    this.tabIndex=index;
  }
}
