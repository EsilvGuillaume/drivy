'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//EXERCICE 1 début : 
////////////////////////////////////////////////////
function getCarID(id)
{
	for (var i=1; i<cars.length;i++)
		{
		if(id == cars[i].id)
			{
			return cars[i];
			}
		}
}
function getRentalID(id)
{
	for (var i =1; i<rentals.length;i++)
	{
	if(id == rentals[i].id)
		{
		return rentals[i];
		}
	}
}
function getDatediff(id)
{
	var rentalschoix = getRentalID(id);
	var DateRetour = new Date (rentalschoix.returnDate);
	var DateReserve = new Date(rentalschoix.pickupDate);
	var jour = (DateRetour - DateReserve )/(24*3600*1000)+1 ;
	console.log(jour);
	return jour ; 
}
function rentalprice()
{
	for (var i = 1; i<rentals.length; i++)
		{
		
		if(rentals[i].carId == cars[i].id)
			{
			var rentaltmp = rentals[i];
			var car = cars[i];
			var date = getDatediff(rentaltmp.id);
			var pricetime = date * car.pricePerDay;
		    var distprice = rentaltmp.distance * car.pricePerKm;
		    var pricetotal = pricetime + distprice;
		    rentaltmp.price = pricetotal;
		    console.log("prix de "+rentaltmp.id+" : "+rentaltmp.price);
			}
		}
	}
//FIN EXERCICE 1 
//////////////////////////////////////////////////////
//Exercice 2 début :
/////////////////////////////////////////////////////
function decreasing_price(rentals)
{
	for(var i = 1; i<rentals.length;i++)
		{
		var recuptemps = getDatediff(rentals[i].id);
		if (recuptemps >1 && recuptemps <=4)
			{
			rentals[i].price *= 0.90;
			console.log("prix après réduction de 10% : "+rentals[i].price);
			}
		else if (recuptemps >4 && recuptemps <=10)
		{
		rentals[i].price *= 0.70;
		console.log("prix après réduction de 30% : "+rentals[i].price);
		}
		else if (recuptemps >10)
		{
		rentals[i].price *= 0.50;
		console.log("prix après réduction de 50% : "+rentals[i].price);
		}
		}
	}
//Fin exercice 2 
//////////////////////////////////////////
rentalprice();
decreasing_price(rentals);
console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
