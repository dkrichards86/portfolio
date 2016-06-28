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

My portfolio project was an opportunity for me to learn some more advanced React concepts.

A project of this scope and nature does not need to be written in a complex 
ecosystem like React. This is very over-engineered. It's much easier for me to 
stretch concepts and push my limits on a smaller project like this than on a 
complex project like <Link to="risingbar">Rising Bar</Link>.

This project was also the impetus behind a React PageHead higher order component.
The HOC injects meta information on a per-component basis. I'm still weighing the
SEO benefits of these injected meta tags. If I'm satisfied with the results, I 
intend to release the project to NPM.

I intend to add a Linter to this project for better code.  Stay tuned.
`
};

module.exports = Content;
