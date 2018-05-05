let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  // passengers(){
  //   return store.trips.filter(trip => {
  //     return trip.passengerId === this.id
  //   })
  // }

  passengers(){
    const trips = this.trips()

  }
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  // trips(){
  //   return driver.trips.filter(function(trip){
  //     return trip.id === this.driverId
  //   })
}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if (driver){
    this.driverId = driver.id
  }
    if(passenger){
    this.passengerId = passenger.id
}

    store.trips.push(this)
  }

  setPassenger(passenger){
   this.passengerId = passenger.id
 }

  setDriver(driver){
    this.driverId = driver.id
  }

driver(){
  return store.drivers.find(function(driver){
    return driver.id === this.driverId
  })
}
}
