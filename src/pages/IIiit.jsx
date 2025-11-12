import React from 'react';

// Social media icons component
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

// Footer link list component
const LinkList = ({ title, list }) => (
    <div>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
        <ul className="mt-4 space-y-2">
            {list.map((item, i) => (
                // Key Change 1: Conditionally applying classes for the "News" item.
                // It will be `hidden` on small screens and `block` on medium screens (`md`) and up.
                <li key={i} className={item === 'News' ? 'hidden md:block' : ''}>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// Main Footer Component
function Footer() {
    const listA = ["Investors", "Features", "Book a demo", "Security"];
    const listB = ["Credit Cards", "Gift Cards", "Savings Accounts", "NFT"];
    const listC = ["Free rewards", "Documentation", "Affiliate program"];
    const listD = ["Changelog", "License", "Site Maps", "News"]; // "News" is in this list

    return (
        // Key Change 2: Ensure footer has a higher z-index to stay on top of other content, but the main layout will control the background.
        <footer className="relative z-20 bg-black/30 backdrop-blur-lg text-gray-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Top section */}
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Company Info */}
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center gap-3">
                            <img className="h-8 w-auto" src="/Images/Exclude.svg" alt="Wern Finance Logo" />
                            <h5 className="font-bold text-xl text-white">Wern Finance</h5>
                        </div>
                        <p className="text-gray-400 text-base max-w-xs">
                            Discover the power of our secure and rewarding credit cards.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="mt-12 xl:mt-0 xl:col-span-2">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <LinkList title="About Us" list={listA} />
                            <LinkList title="Products" list={listB} />
                            <LinkList title="Useful Links" list={listC} />
                            <LinkList title="Resources" list={listD} />
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-12 border-t border-gray-700/50 pt-8 flex flex-col sm:flex-row-reverse sm:justify-between items-center">
                    <div className="flex space-x-6">
                        <SocialIcon href="#">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </SocialIcon>
                    </div>
                    <p className="mt-8 sm:mt-0 text-base text-gray-400">&copy; {new Date().getFullYear()} Wern Finance. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
