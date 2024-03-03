# random-pack-generator

Go to [the github page to view the thing!](https://gemma418.github.io/random-pack-generator/)

This was written to help with training random pack defecits and power jam scenarios.

Each time the generate pack button is clicked, the function runs and returns:

## Jammers
True or false.
True is weighted 2:1, so each jammer is more likely to be on track than off.
If the first pack result is false, the second will be true so that there is always at least one jammer on track.

## Pivots
True or false.
True is weighted 2:1, so each pivot is more likely to be on track than off.

## Blockers
A random number of blockers between 0 and 3.
The weighting of results is:
10% chance for zero blockers, 20% for 1 blocker, 30% for 2 blockers, and 40% for 3 blockers.
