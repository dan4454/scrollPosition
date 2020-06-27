# Restore a previous scroll position that was saved earlier

This project requires a little (lot!) more work to make it obvious to anybody else what is going on. I finally found this again after looking for it all over my computer.


## IMPORTANT: This worked on stackblitz, but not when I put on my local computer to use with Angular 9. Weird!

See the stackblitz version here: https://stackblitz.com/edit/a5465

## Update! I've got it working now.

I found a recommendation to use window.scrollTo(x, y) and it works! You still have to use the timer to give the browser time to display the screen fully again, though. But that's no big deal.

See the component **simple-test**.

I have updated the stackblitz app to use scrollTo and it still works fine there.



