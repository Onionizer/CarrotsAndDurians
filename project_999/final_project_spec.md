# 

## IDEA
For commuters going to San Francisco, there is [Casual Carpool](https://sfcasualcarpool.com/).  Unfortunately, my commute is from east bay to Redwood City and there's no public transit. 

With sufficient number of active users, a user should be able to easily find and coordinate routes and times that suit his or her needs for commuting - minimal detour for both driver and rider.

Similar to casual carpool, there likely are common spots where a significant number of travelers either pass by or live near.  These locations can be pick-up spots for the driver and riders to coordinate.

## Team
Myself!

## USER STORIES
1. As a commuter who drives, I want to coordinate with other riders, carpool across a toll bridge, and get paid for driving.  I want to list my commute route (time, route).

1. As a commuter who drives, I want to coordinate with other drivers, carpool across a toll bridge, and pay to avoid driving a long commute. I want to view the list of drivers who can add a rider.

1. As a user who has received money from riders or has deposited money, I want to withdraw the money or deposit more fund.
    * Connecting bank sounds like way too complicated.  I'm hoping to emulate it with just buttons that will add or remove fund on the account.

1. As a user, I want to save home and work addresses and have the Carpool Coordinate show me the route on my profile visually.

## ACCEPTANCE CRITERIA
* The user can go to profile page and set home address and work address.  If both are set, the user will be able to view a Google Map-like view of the route.

* The user can set status of their commute (available, unavailable, full, etc).  If available and there's room for more riders, then the commute route should be visible on the list.

### Stretch goals
* Driver can set limit on how much additional time they are willing to drive (e.g., 1 hour commute + 20 min to carpool)


## Frameworks, API, Data
* JS Framework: Mithril?
* RandomUser: populate user data
* Google Maps
* Airtable: can use to maintain data (or some other database?)
* Netlify/Pusher for real time updates?

## Mock-ups
See mock-up directory.