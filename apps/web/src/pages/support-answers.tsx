/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { Footer } from "ui";
import { MenuCorporate } from "ui";
import { SupportMenu } from "ui";

export default function Support() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Menu />

      <MenuCorporate />
      <SupportMenu />
      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        Pencil Answers.™
      </a>
      <main>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-md-5 px-md-5 overflow-hidden px-3 pt-3 text-left">
            <p>
              <strong>Who are you and what is Pencil Domains?</strong>
            </p>
            <p>
              Pencil Domains is a project of Pencil Works LLC. We also started
              Pencil Website years, ago. pencil.domains allows you to rent
              domains on new TLDs which have been created with the
              <a href="https://handshake.org/" target="_blank" rel="noreferrer">
                handshake project
              </a>
              . It is an improved version of DNS built for the new internet.
            </p>
            <p>
              <strong>
                What are handshake domains and how do I resolve them in my
                browser?
              </strong>
            </p>
            <p>
              Handshake is DNS built on a blockchain. It is outside of ICANN.
              You can resolve handshake domains with
              <a href="https://nextdns.io" target="_blank" rel="noreferrer">
                NextDNS
              </a>
              or
              <a
                href="https://github.com/namebasehq/awesome-handshake#handshake-resolvers"
                target="_blank"
                rel="noreferrer"
              >
                other options
              </a>
              . You can read more about
              <a href="https://handshake.org" target="_blank" rel="noreferrer">
                handshake here
              </a>
              .
            </p>
            <p>
              <strong>What is an EPP-based registrar?</strong>
            </p>
            <p>
              <a
                href="https://tools.ietf.org/html/rfc5731"
                target="_blank"
                rel="noreferrer"
              >
                EPP
              </a>
              is the standard protocol used for the provisioning and management
              of Internet domain names. It is used to manage most of the domains
              on the internet including all .com domains, .org domains, .io
              domains, etc... We are the first to rent Spain, Canarias, Andorra
              domains to use EPP to manage and sell domains on handshake TLDs.
            </p>
            <p>
              <strong>Is the TLD secure?</strong>
            </p>
            <p>
              The TLDs are secured on the handshake blockchain. We use advanced
              tools like Bob Wallet to secure domains.
            </p>
            <p>
              <strong>
                We are a registrar - can we sell domains on handshake TLDs?
              </strong>
            </p>
            <p> Yes! Please contact our Twitter.</p>
            <p>
              <strong>
                I own a handshake TLD - can I sell domains on it with your
                system?
              </strong>
            </p>
            <p>
              Yes. Follow the guidelines of
              <a
                href="https://developer.pencil.domains"
                target="_blank"
                rel="noreferrer"
              >
                Pencil Developer
              </a>
              and Contact Twitter.
            </p>
            <p>
              <strong>Is my info safe?</strong>
            </p>
            <p> Yes. We only collect cookies for Google Analytics.</p>
            <p>
              <strong>
                How do I manage the domains I have rented from pencil.domains?
              </strong>
            </p>
            <p>
              You can manage your domains at the
              <a
                href="https://fastest.pencil.domains"
                target="_blank"
                rel="noreferrer"
              >
                Registry Pencil EPP-based software
              </a>
              . From this page you can update the namesevers for the domain, or
              get the transfer auth code for the domain (if you want to transfer
              the domain to another person).
            </p>
            <p>
              <strong>
                What are your terms of service for users? What is the
                pencil.domains privacy policy users?
              </strong>
            </p>
            <p>
              You can see read the
              <a
                href="https://pencil.domains/tos"
                target="_blank"
                rel="noreferrer"
              >
                pencil.domains terms of service here
              </a>
              and the
              <a
                href="https://pencil.domains/privacy"
                target="_blank"
                rel="noreferrer"
              >
                pencil.domains privacy policy here
              </a>
              .
            </p>
            <p>
              <strong>
                What are your terms of service for Pencil Developer? What is the
                pencil.domains privacy policy Pencil Developer?
              </strong>
            </p>
            <p>
              You can see read the
              <a
                href="https://developer.pencil.domains/tos"
                target="_blank"
                rel="noreferrer"
              >
                pencil.domains terms of service here
              </a>
              and the
              <a
                href="https://pencil.domains/privacy"
                target="_blank"
                rel="noreferrer"
              >
                pencil.domains privacy policy here
              </a>
              .
            </p>
            <p>
              <strong>I want to pay by credit card, is there an option?</strong>
            </p>
            <p>
              Yes, PayPal is set it up, and HNS, it is also full decentralized,
              by the moment.
            </p>
            <p>
              <strong>
                Can I get a refund on my account, credit card or HNS Wallet?
              </strong>
            </p>
            <p> No. We do not accept refunds of any kind.</p>
            <p>
              <strong>
                Can I use multi-factor authentication to add security to my
                pencil.domains account?
              </strong>
            </p>
            <p>
              In fact, you must. Yes, there is an option to turn DUO or Google
              Auth on for your account by editing your account details.
            </p>
            <p>
              <strong>
                I do not think GA or DUO worked because I was not asked for it
                when logging in.
              </strong>
            </p>
            <p>
              If you enter the correct code from a computer, for convenience we
              store a cookie there so you do not have to enter the code each
              time you log in. If you would rather enter the code each time,
              simply make sure to log out of pencil.domains and the cookie will
              be deleted.
            </p>
            <p>
              <strong>What happens if I lost DUO or Google Auth?</strong>
            </p>
            <p> Go to Twitter Official account for support.</p>
            <p>
              <strong>
                Please can you direct me to the instructions on transferring
                domains to another party or explain how I can do this?
              </strong>
            </p>
            <p>
              No, by the moment we do not transfer domains to other registrars.
            </p>
            <p>
              <strong>
                Can I push my domain to another pencil.domains user? What is the
                fee?
              </strong>
            </p>
            <p>
              Yes - on the Domain details page, simply click on the button
              labeled Push and enter the email address of the person you want to
              push the domain to. They will have to create a pencil.domains
              account if they do not already have one. There is a fee of 50 HNS
              to push a domain.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
