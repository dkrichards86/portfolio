const Content = {
    meta: {
        title: "Keith Richards - Portfolio",
        meta: {
            name: "description",
            content: "Keith's React portfolio project.  It's a bit over-engineered, but its still pretty sweet."
        }
    },
    content: `
#Project: Portfolio
##[dkrichards.com](http://www.dkrichards.com "Keith Richards' portfolio")

My portfolio project started as an opportunity for me to learn some more advanced
React concepts.

A project of this scope and nature does not need to be written in a complex 
ecosystem like React.  This proves to be a good sandbox as it's much easier for me to 
stretch concepts and push my limits on a smaller project like this than on a 
complex project like [Rising Bar](/risingbar).

What started as static components has evolved into a markup based Jekyll-esque static 
blog.  I had considered connecting to a real backend, but ultimately decided it
wasn't necessary.  

This project was also the impetus behind a React PageHead higher order component.
The HOC injects meta information on a per-component basis. [React-PageHead](/reactpagehead)
has since been released to NPM!

I intend to add a Linter to this project for better code.  Stay tuned.
`
};

module.exports = Content;
