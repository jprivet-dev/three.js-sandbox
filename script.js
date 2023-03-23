class ButtonSwitchPerformance {
  _button;
  _lowPerformance = false;
  _highPerformanceLabel = 'High performance';
  _highPerformanceTitle = 'Activate high performance version';
  _lowPerformanceLabel = 'Low performance';
  _lowPerformanceTitle = 'Activate low performance version';
  _lowPerformanceParam = 'low_performance';

  constructor (id) {
    this._button = document.getElementById(id);
    if (this._button) {
      this.init();
    }
  }

  init () {
    const url = new URL(window.location);
    this._lowPerformance = !!url.searchParams.get(this._lowPerformanceParam);

    if (this._lowPerformance) {
      // ini button high performance
      url.searchParams.delete(this._lowPerformanceParam);
      this.initButton(
        this._highPerformanceLabel,
        this._highPerformanceTitle,
        url.href
      );
    }
    else {
      // ini button low performance
      url.searchParams.append(this._lowPerformanceParam, true);
      this.initButton(
        this._lowPerformanceLabel,
        this._lowPerformanceTitle,
        url.href
      );
    }
  }

  initButton (text, title, href) {
    this._button.text = text;
    this._button.title = title;
    this._button.href = href;
  }

  lowPerformance () {
    return this._lowPerformance;
  }

  highPerformance () {
    return !this._lowPerformance;
  }
}