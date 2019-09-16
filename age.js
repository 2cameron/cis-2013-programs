 var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat (prompt("Enter your Age"));
     floatDays = floatAge * 365.25;
     floatMonths = floatAge * 12;
     intWeeks = floatDays / 7 ;
     intFortnights = floatDays / 14;
     alert("Initial age = " + floatAge + " "+ "Days lived = " + floatDays + " " + "Months lived = " + floatMonths + " "+ "Fortnights lived = " + intFortnights);
           
  