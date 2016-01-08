let PrettyDate = class PrettyDate {
	constructor() {
		this.second = 1000;
		this.minute = 60 * this.second;
		this.hour 	= 60 * this.minute;
		this.day 	  = 24 * this.hour;
		this.week 	= 7 * this.day;
		this.month 	= 31 * this.day;
		this.year 	= 365 * this.day;
		this.now 	  = (new Date()).getTime();
	};

  countDays(date) {
    let that = this;
    return Math.floor(date / that.day);
  }

  messageFormat(date, numberDays){
    let that = this;
    let message;

    switch(true) {
      case (numberDays === 0):
        switch(true) {
          case (date < that.minute):
            message = "Agora mesmo";
            break;
          case (date < (that.minute*2)):
            message = "1 minuto atrás";
            break;
          case (date < that.hour):
            message = Math.floor( date / that.minute ) + " minutos atrás";
            break;
          case (date < (that.hour*2)):
            message = "1 hora atrás";
            break;
          case (date < that.day):
            message = Math.floor( date / that.hour ) + " horas atrás";
            break;
        }
        break;
      case (numberDays === 1):
        message = "Ontem";
        break;
      case (numberDays < 7):
        message = numberDays + " dias atrás";
        break;
      case (numberDays < 31):
        message = Math.ceil( numberDays / that.week ) + " semanas atrás";
        break;
    }

    return message;
  }

	format(now, time){
		let that = this;
		let date              = new Date(time || "");
		let difference        = ((new Date(now)).getTime() - date.getTime());
		let difference_in_days = that.countDays(difference);

		if ( isNaN(difference_in_days) || difference_in_days < 0 || difference_in_days >= 31 ) {
		  return false;
		}

    return that.messageFormat(difference, difference_in_days);

	}

	update(now) {
		var links = document.getElementsByTagName("a");
		for ( var i = 0; i < links.length; i++ ) {
			if ( links[i].title ) {
				var date = prettyDate.format(now, links[i].title);
				if ( date ) {
					links[i].innerHTML = date;
				}
			}
		}
	}
}

// const p1 = new PrettyDate();
// console.log(p1.format( "2008/02/09 24:29:00", "2008/01/28 22:24:30"));
