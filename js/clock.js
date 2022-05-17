export class Clock {
  date_doms;
  time_doms;
  date_text;
  time_text;
  clock;

  date_format = new Intl.DateTimeFormat("ja-jp", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  time_format = new Intl.DateTimeFormat("ja-jp", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  constructor(updateInterval_ms = 1000) {
    this.date_doms = Array.from(document.getElementsByClassName("date"))
    this.time_doms = Array.from(document.getElementsByClassName("time"))

    console.log(this.date_doms);

    this.clock = setInterval(() => this.updateDisplayDateTime(), updateInterval_ms);
  }

  stop() {
    clearInterval(this.clock);
  }

  updateDisplayDateTime() {
    let date = new Date();
    this.date_text = this.date_format.format(date);
    this.time_text = this.time_format.format(date);

    this.date_doms.forEach(date_dom => {
      date_dom.innerText = this.date_text;
    });

    this.time_doms.forEach(time_dom => {
      time_dom.innerText = this.time_text
    });
  }

}