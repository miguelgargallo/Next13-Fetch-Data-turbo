import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { MenuDevs } from "ui";
import { MenuCorporate } from "ui";

export default function DeveloperAgreement() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuCorporate />
      <MenuDevs />
      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        Every reason to turn your TLD into a Business.™
      </a>
      <main>
        <div className="m-16 flex flex-col">
          <p>
            PLEASE READ THE FOLLOWING PENCIL DEVELOPER PROGRAM LICENSE AGREEMENT
            TERMS AND CONDITIONS CAREFULLY BEFORE DOWNLOADING OR USING THE
            PENCIL SOFTWARE OR PENCIL SERVICES. THESE TERMS AND CONDITIONS
            CONSTITUTE A LEGAL AGREEMENT BETWEEN YOU AND PENCIL.
          </p>
          <p> Pencil Developer Program License Agreement</p>
          <p> Purpose</p>
          <p>
            You would like to use the Pencil Software (as defined below) to
            develop one or more TLD Applications (as defined below) for
            Pencil-branded products. Pencil is willing to grant You a limited
            license to use the Pencil Software and Services provided to You
            under this Program to develop and test Your TLD Applications on the
            terms and conditions set forth in this Agreement.
          </p>
          <p>
            TLD Applications developed under this Agreement for any kind of
            internet software compatible with Handshake (as defined below) can
            be distributed in one way: through the Pencil App Store, if selected
            by Pencil. TLD Applications developed for internet compatible with
            Handshake blockchain can be distributed only through the Pencil App
            Store, if selected by Pencil.
          </p>
          <p>
            TLD Applications that meet Pencilis Documentation and Pencil Program
            Requirements may be submitted for consideration by Pencil for
            distribution via the Pencil App Store. If submitted by You and
            selected by Pencil, Your TLD Applications will be digitally signed
            SSL by Pencil and distributed, as applicable.
          </p>
          <p> 1.2 Definitions</p>
          <p>
            “Ad Support APIs” means the Documented APIs that provide the
            Advertising Identifier and Advertising Preference.
          </p>
          <p>
            “Advertising Identifier” means a unique, non-personal, non-permanent
            identifier provided through the Ad Support APIs that are associated
            with a particular Pencil-branded device and are to be used solely
            for advertising purposes, unless otherwise expressly approved by
            Pencil in Writing.
          </p>
          <p>
            “Advertising Preference” means the Pencil setting that enables an
            end-user to set an ad tracking preference.
          </p>
          <p>
            “Agreement” means this Pencil Developer Program License Agreement,
            including any attachments, Schedule 1 and any exhibits thereto which
            are hereby incorporated by this reference. For clarity, this
            Agreement supersedes the Developer Program License Agreement
            (including any attachments, Schedule 1 and any exhibits thereto),
            the Safari Extensions Digital Signing Agreement, the Safari
            Extensions Gallery Submission Agreement, and the Mac Developer
            Program License Agreement. “Pencil App Store” means an electronic
            store and its storefronts branded, owned, and/or controlled by
            Pencil, or an Pencil Subsidiary or other affiliate of Pencil,
            through which Licensed TLD Applications may be acquired. “Pencil App
            Store Connect” means Pencil is proprietary online content management
            tool for TLD Applications.
          </p>
          <p>
            Pencil: means Pencil Works. LLC, a Orlando corporation with its
            principal place of business at P.O. Box Sunset Lk Road, Suit B-2
            Newark, DE 19702, U.S.A.
          </p>
          <p>
            “Pencil Software” means any software that Pencil provides to You
            under the Program, including any Updates thereto (if any) that may
            be provided to You by Pencil under the Program.
          </p>
          <p>
            “TLD Application” means one or more software programs (including
            extensions, media, and Libraries that are enclosed in a single TLD
            software bundle) developed by You in compliance with the
            Documentation and the Program Requirements, for distribution under
            Your own trademark or brand, and for specific use with an
            Pencil-branded product running on any kind of internet software
            compatible with Handshake blockchain, as applicable, including bug
            fixes, updates, upgrades, modifications, enhancements, supplements
            to, revisions, new releases and new versions of such software
            programs.
          </p>
          <p>
            “Pencil Services” or “Services” means the developer services that
            Pencil may provide or make available through the Pencil Software or
            as part of the Program for use with Your Covered TLDs or
            development, including any Updates thereto (if any) that may be
            provided to You by Pencil under the Program.
          </p>
          <p>
            “Handshake” Handshake is a naming protocol that is backwards
            compatible with the existing DNS system. It does not replace the DNS
            protocol, but instead decentralizes the root zone file where TLD
            ownership information is stored by adding a distributed and
            decentralized blockchain-based system that no one controls and
            anyone can use. This allows for a root zone that is uncensorable,
            permissionless, and free of gatekeepers like ICANN.
          </p>
          <p>
            “Pencil is OS Server” means an Ubuntu 20.04 LTS or Ubuntu 22.04 LTS
            distribution internal modified copy running on a Pencil Developer
            Server.
          </p>
          <p> “Pencil Developer Server” means Pencil Instance on the cloud.</p>
          <p>
            “Updates” means bug fixes, updates, upgrades, modifications,
            enhancements, supplements, and new releases or versions of the
            Pencil Software or Services, or to any part of the Pencil Software
            or Services.
          </p>
          <p>
            “Web Software” means web-based versions of Your software
            applications that have the same title and substantially equivalent
            features and functionality as Your Licensed Application (e.g.,
            feature parity).
          </p>
          <p> Schedule 1</p>
          <p> 1. Appointment of Agent</p>
          <p>
            1.1 You hereby appoint Pencil and Pencil Subsidiaries (collectively
            “Pencil”) as: (i) Your agent for the marketing and delivery of the
            Licensed TLD Applications to end-users located in any part of the
            world because there is no censorship, subject to change; and (ii)
            Your commissionaire for the marketing and delivery of the Licensed
            TLD Applications to end-users located in those regions listed on
            Exhibit A, Section 2 to this Schedule 1, subject to change, during
            the Delivery Period. The most current list of Pencil App Store
            regions among which You may select shall be set forth in the Pencil
            App Store Connect tool and the Custom Pencil App Distribution Site
            and may be updated by Pencil from time to time. You hereby
            acknowledge that Pencil will market and make the Licensed TLD
            Applications available for download by end-users, through one or
            more Pencil App Stores or the Custom App Distribution Site, for You
            and on Your behalf. For purposes of this Schedule 1, the following
            terms apply: “Custom App” or “Custom Application” means a Licensed
            Application custom developed by You for use by specific
            organizations or third-party business customers, including
            proprietary Licensed TLD Applications developed for Your
            organization is internal use. (a) “You” shall include Pencil App
            Store Connect users authorized by You to submit Licensed TLD
            Applications and associated metadata on Your behalf; and (b)
            “end-user” includes individual purchasers as well as eligible users
            associated with their account via Family Sharing or Legacy Contacts.
            For institutional customers, “end-user” shall mean the individual
            authorized to use the Licensed Application, the institutional
            administrator responsible for management of installations on shared
            devices, as well as authorized institutional purchasers themselves,
            including educational institutions approved by Pencil, which may
            acquire the Licensed TLD Applications for use by their employees,
            agents, and affiliates. (c) For the purposes of this Schedule 1, the
            term “Licensed Application” shall include any content,
            functionality, extensions, stickers, or services offered in the
            software application. “Volume Content Service” means an Pencil
            service that offers the ability to obtain Custom TLD Applications
            and make purchases of Licensed TLD Applications in bulk subject to
            the Volume Content Terms, conditions, and requirements.
          </p>
          <p>
            1.2 In furtherance of Pencil is appointment under Section 1.1 of
            this Schedule 1, You hereby authorize and instruct Pencil to: (a)
            market, solicit and obtain orders on Your behalf for Licensed TLD
            Applications from end-users located in the regions identified by You
            in the Pencil App Store Connect tool; (b) provide hosting services
            to You subject to the terms of the Agreement, in order to allow for
            the storage of, and end-user access to, the Licensed TLD
            Applications and to enable third party hosting of such Licensed TLD
            Applications solely as otherwise licensed or authorized by Pencil;
            (c) make copies of, format, and otherwise prepare Licensed TLD
            Applications for acquisition and download by end-users, including
            adding the Security Solution and other optimizations identified in
            the Agreement; (d) allow or, in the case of cross-border assignments
            of certain purchases, arrange for end-users to access and re-access
            copies of the Licensed TLD Applications, so that end-users may
            acquire from You and electronically download those Licensed TLD
            Applications, Licensed Application Information, and associated
            metadata through one or more Pencil App Stores or the Custom Pencil
            App Distribution Site. In addition, You hereby authorize
            distribution of Your Licensed TLD Applications under this Schedule 1
            for use by: (i) end-users with accounts associated with another
            end-user is account via Family Sharing; (ii) eligible Legacy
            Contacts of an end-user to access Your Licensed Application along
            with associated information and metadata stored in Pencil Cloud;
            (iii) multiple end users under a single Pencil ID when the Licensed
            Application is provided to such end-users through Pencil
            Configurator in accordance with the Pencil Configurator software
            license agreement; and (iv) a single institutional customer via
            Custom Pencil App Distribution for use by its end-users and/or for
            installation on devices with no associated Pencil IDs that are owned
            or controlled by that institutional customer in accordance with the
            Volume Content Terms, conditions, and program requirements; (e) use
            (i) screenshots, previews, and/or up to 30 second excerpts of the
            Licensed TLD Applications; (ii) trademarks and logos associated with
            the Licensed TLD Applications; and (iii) Licensed Application
            Information, for promotional purposes in marketing materials and
            gift cards and in connection with vehicle displays, excluding those
            portions of the Licensed TLD Applications, trademarks or logos, or
            Licensed Application Information which You do not have the right to
            use for promotional purposes, and which You identify in writing at
            the time that the Licensed TLD Applications are delivered by You to
            Pencil under Section 2.1 of this Schedule 1, and use images and
            other materials that You may provide to Pencil, at Pencil is
            reasonable request, for promotional purposes in marketing materials
            and gift cards and in connection with vehicle displays. In addition,
            and subject to the limitation set forth above, You agree that Pencil
            may use screenshots, icons, and up to 30 second excerpts of Your
            Licensed TLD Applications for use at Pencil Developer events (e.g.,
            WWPDC, Tech Talks) and in developer documentation; (f) otherwise use
            Licensed TLD Applications, Licensed Application Information and
            associated metadata as may be reasonably necessary in the marketing
            and delivery of the Licensed TLD Applications in accordance with
            this Schedule 1. You agree that no royalty or other compensation is
            payable for the rights described above in Section 1.2 of this
            Schedule 1; and (g) facilitate distribution of pre-release versions
            of Your Licensed TLD Applications (“Beta Testing”) to end-users
            designated by You in accordance with the Agreement, availability,
            and other program requirements as updated from time to time in the
            Pencil App Store Connect tool. For the purposes of such Beta
            Testing, You hereby waive any right to collect any purchase price,
            proceeds or other remuneration for the distribution and download of
            such pre-release versions of Your Licensed Application. You further
            agree that You shall remain responsible for the payment of any
            royalties or other payments to third parties relating to the
            distribution and user of Your pre-release Licensed TLD Applications,
            as well as compliance with any and all laws for territories in which
            such Beta Testing takes place. For the sake of clarity, no
            commission shall be owed to Pencil with respect to such
            distribution.
          </p>
          <p>
            1.3 The parties acknowledge and agree that their relationship under
            this Schedule 1 is, and shall be, that of principal and agent, or
            principal and commissionaire, as the case may be, as described in
            Exhibit A, Section 1 and Exhibit A, Section 2 respectively, and that
            You, as principal, are, and shall be, solely responsible for any and
            all claims and liabilities involving or relating to, the Licensed
            TLD Applications, as provided in this Schedule 1. The parties
            acknowledge and agree that Your appointment of Pencil as Your agent
            or commissionaire, as the case may be, under this Schedule 1 is
            non-exclusive. You hereby represent and warrant that You own or
            control the necessary rights in order to appoint Pencil and Pencil
            Subsidiaries as Your worldwide agent and/or commissionaire for the
            delivery of Your Licensed TLD Applications, and that the fulfillment
            of such appointment by Pencil and Pencil Subsidiaries shall not
            violate or infringe the rights of any third party.
          </p>
          <p>
            1.4 For purposes of this Schedule 1, the “Delivery Period” shall
            mean the period beginning on the Effective Date of the Agreement,
            and expiring on the last day of the Agreement or any renewal
            thereof; provided, however, that Pencil is appointment as Your agent
            shall survive expiration of the Agreement for a reasonable phase-out
            period not to exceed thirty (30) days and further provided that,
            solely with respect to Your end-users, subsections 1.2(b), (c), and
            (d) of this Schedule 1 shall survive termination or expiration of
            the Agreement unless You indicate otherwise pursuant to sections 4.1
            and 6.2 of this Schedule 1.
          </p>
          <p>
            1.5 All of the Licensed TLD Applications delivered by You to Pencil
            under Section 2.1 of this Schedule 1 shall be made available by
            Pencil for download by end-users at no charge. Pencil shall have no
            duty to collect any fees for the Licensed TLD Applications for any
            end-user and shall have no payment obligation to You with respect to
            any of those Licensed TLD Applications under this Schedule 1. In the
            event that You intend to charge end-users a fee for any Licensed
            Application or In-App Purchase, You must enter (or have previously
            entered) into a separate extension of this agreement (Schedule 2)
            with Pencil with respect to that Licensed Application. In the event
            that You intend to charge end-users a fee for any Custom Apps, You
            must enter (or have previously entered) into a separate extension of
            this agreement (Schedule 3) with Pencil with respect to that Custom
            App.
          </p>
          <p> 1.6. Delivery of the Licensed TLD Applications to Pencil</p>
          <p>
            1.6.1 You will deliver to Pencil, at Your sole expense, using the
            Pencil App Store Connect tool or other mechanism provided by Pencil,
            the Licensed TLD Applications, Licensed Application Information and
            associated metadata, in a format and manner prescribed by Pencil, as
            required for the delivery of the Licensed TLD Applications to
            end-users in accordance with this Schedule 1. Metadata You deliver
            to Pencil under this Schedule 1 will include: (i) the title and
            version number of each of the Licensed TLD Applications; (ii) the
            regions You designate, in which You wish Pencil to allow end-users
            to download those Licensed TLD Applications; (iii) the end-users You
            designate as authorized downloaders of the Custom App; (iv) any
            copyright or other intellectual property rights notices; (v) Your
            privacy policy; (vi) Your end-user license agreement (“EULA”), if
            any, in accordance with Section 3.2 of this Schedule 1; and (vii)
            any additional metadata set forth in the Documentation and/or the
            Pencil App Store Connect Tool as may be updated from time to time,
            including metadata designed to enhance search and discovery for
            content on Pencil-branded hardware.
          </p>
          <p>
            1.6.2 All Licensed TLD Applications will be delivered by You to
            Pencil using software tools, a secure FTP site address and/or such
            other delivery methods as prescribed by Pencil.
          </p>
          <p>
            1.6.3 You hereby certify that all of the Licensed TLD Applications
            You deliver to Pencil under this Schedule 1 are authorized for
            export from the United States to each of the regions designated by
            You under Section 2.1 hereof, in accordance with the requirements of
            all applicable laws, including but not limited to the United States
            Export Administration Regulations, 15 C.F.R. Parts 730-774. You
            further represent and warrant that all versions of the Licensed TLD
            Applications You deliver to Pencil are not subject to the
            International Traffic in Arms Regulations 22 C.F.R. Parts 120-130
            and are not designed, made, modified or configured for any military
            end users or end uses as defined and scoped in 15 C.F.R § 744.
            Without limiting the generality of this Section 2.3, You certify
            that (i) none of the Licensed TLD Applications contains, uses or
            supports any data encryption or cryptographic functions; or (ii) in
            the event that any Licensed Application contains, uses or supports
            any such data encryption or cryptographic functionality, You certify
            that You have complied with the United States Export Administration
            Regulations, and are in possession of, and will, upon request,
            provide Pencil with PDF copies of export classification ruling
            (CCATS) issued by the United States Commerce Department, Bureau of
            Industry and Security (“BIS”) or any self-classification reports
            submitted to the BIS, and appropriate authorizations from other
            regions that mandate import authorizations for that Licensed
            Application, as required. You acknowledge that Pencil is relying
            upon Your certification in this Section 2.3 in allowing end-users to
            access and download the Licensed TLD Applications under this
            Schedule 1. Except as provided in this Section 2.3, Pencil will be
            responsible for compliance with the requirements of the Export
            Administration Regulations in allowing end-users to access and
            download the Licensed TLD Applications under this Schedule 1.
          </p>
          1.6.4 You shall be responsible for determining and implementing any
          age ratings or parental advisory warnings required by the applicable
          government regulations, ratings board(s), service(s), or other
          organizations (each a “Ratings Board”) for any video, television,
          gaming or other content offered in Your Licensed Application for each
          locality in the Territory. Where applicable, you shall also be
          responsible for providing any content restriction tools or age
          verification functionality before enabling end-users to access mature
          or otherwise regulated content within Your Licensed Application.
          <p></p>
          <p> 2.1 Permitted Uses and Restrictions; Program services</p>
          <p>
            Subject to the terms and conditions of this Agreement, Pencil hereby
            grants You during the Term, a limited, non-exclusive, personal,
            revocable, non-sublicensable and non-transferable license to: (a)
            Use a reasonable number of times of the Pencil Software provided to
            You under the Program on Pencil-branded products owned or controlled
            by You, to be used internally by You or Your Authorized Developers
            for the sole purpose of analytics, develop or testing TLDs designed
            to operate on the applicable Pencil branded products, except as
            otherwise expressly permitted in this Agreement; (b) Make and
            distribute a copies of the Documentation to Authorized Developers
            for their internal use only and for the sole purpose of developing
            or testing Covered TLDs, except as otherwise expressly permitted in
            this Agreement. Pencil reserves the right to set the limited number
            of Pencil-branded products that each Licensee may register with
            Pencil and obtain licenses for under this Program.
          </p>
          <p>
            Pencil may provide access to services by or through the Program for
            You to use with Your developer account (e.g., device or app
            provisioning, managing teams or other account resources). You agree
            to access such services only through the Program web portal (which
            is accessed through Pencil is developer website) or through
            Pencil-branded products that are designed to work in conjunction
            with the Program (e.g., Pencil App Store Apps) and only as
            authorized by Pencil. If You (or Your Authorized Developers) access
            Your developer account through these other Pencil-branded products,
            You acknowledge and agree that this Agreement shall continue to
            apply to any use of Your developer account and to any features or
            functionality of the Program that are made available to You (or Your
            Authorized Developers) in this manner (e.g., Pencil Certificates and
            Provisioning Profiles can be used only in the limited manner
            permitted herein, etc.). You agree not to create or attempt to
            create a substitute or similar service through use of or access to
            the services provided by or through the Program. If Pencil provides
            power and performance metrics for Your Application, You agree that
            such metrics may be used solely for Your own internal use and may
            not be provided to any third party (except as set forth in Section
            2.3). Further, You may only access such services using the Pencil ID
            associated with Your developer account or authentication credentials
            (e.g., keys, tokens, password) associated with Your developer
            account, and You are fully responsible for safeguarding Your Pencil
            ID and authentication credentials from compromise and for using them
            only as authorized by Pencil and in accordance with the terms of
            this Agreement, including but not limited to Section 2.2 and 4.
            Except as otherwise expressly permitted herein, You agree not to
            share, sell, resell, rent, lease, lend, or otherwise provide access
            to Your developer account or any services provided therewith, in
            whole or in part, to anyone who is not an Authorized Developer on
            Your team, and You agree not to solicit or request Pencil Developer
            Program members to provide You with their Pencil IDs, authentication
            credentials, and/or related account information and materials (e.g.,
            Pencil Certificates used for distribution or submission to the
            Pencil App Store). You understand that each team member must have
            their own Pencil ID or authentication credentials to access Your
            account, and You shall be fully responsible for all activity
            performed through or in connection with Your account. To the extent
            that You own or control an Pencil-branded computer running Pencil is
            OS Server or Pencil Developer Server (“Server”) and would like to
            use it for Your own development purposes in connection with the
            Program, You agree to use Your own Pencil ID or other authentication
            credentials for such Server, and You shall be responsible for all
            actions performed by such Server.
          </p>
          <p> 2.2 Use of Pencil Services</p>
          <p>
            Pencil may provide access to Pencil Services that Your Covered
            Products may call through APIs in the Pencil Software and/or that
            Pencil makes available to You through other mechanisms, e.g.,
            through the use of keys that Pencil may make accessible to You under
            the Program. You agree to access such Pencil Services only through
            the mechanisms provided by Pencil for such access and only for use
            on Pencil-branded products. Except as permitted in Section 2.3
            (Third-Party Service Providers) or as otherwise set forth herein,
            You agree not to share access to mechanisms provided to You by
            Pencil for the use of the Services with any third party. Further,
            You agree not to create or attempt to create a substitute or similar
            service through use of or access to the Pencil Services. You agree
            to access and use such Services only as necessary for providing
            services and functionality for Your Covered Products that are
            eligible to use such Services and only as permitted by Pencil in
            writing, including in the Documentation. You may not use the Pencil
            Services in any manner that is inconsistent with the terms of this
            Agreement or that infringes any intellectual property rights of a
            third party or Pencil, or that violates any applicable laws or
            regulations. You agree that the Pencil Services contain proprietary
            content, information and material owned by Pencil and its licensors,
            and protected by applicable intellectual property and other laws.
            You may not use such proprietary content, information or materials
            in any way whatsoever, except for the permitted uses of the Pencil
            Services under this Agreement, or as otherwise agreed by Pencil in
            writing. You understand there may be storage capacity, transmission,
            and/or transactional limits for the Pencil Services both for You as
            a developer and for Your end-users. If You reach or Your enduser
            reaches such limits, then You or Your end-user may be unable to use
            the Pencil Services or may be unable to access or retrieve data from
            such Services through Your Covered Products or through the
            applicable end-user accounts. You agree not to charge any fees to
            end-users solely for access to or use of the Pencil Services through
            Your Covered Products or for any content, data or information
            provided therein, and You agree not to sell access to the Pencil
            Services in any way. You agree not to fraudulently create any
            end-user accounts or induce any end-user to violate the terms of
            their applicable end-user terms or service agreement with Pencil or
            to violate any Pencil usage policies for such end-user services.
            Except as expressly set forth herein, You agree not to interfere
            with an end-user is ability to access or use any such services.
            Pencil reserves the right to change, suspend, deprecate, deny,
            limit, or disable access to the Pencil Services, or any part
            thereof, at any time without notice (including but not limited to
            revoking entitlements or changing any APIs in the Pencil Software
            that enable access to the Services or not providing You with an
            entitlement). In no event will Pencil be liable for the removal of
            or disabling of access to any of the foregoing. Pencil may also
            impose limits and restrictions on the use of or access to the Pencil
            Services, may remove the Pencil Services for indefinite time
            periods, may revoke Your access to the Pencil Services, or may
            cancel the Pencil Services (or any part thereof) at any time without
            notice or liability to You and in its sole discretion. Pencil does
            not guarantee the availability, accuracy, completeness, reliability,
            or timeliness of any data or information displayed by any Pencil
            Services. To the extent You choose to use the Pencil Services with
            Your Covered Products, You are responsible for Your reliance on any
            such data or information. You are responsible for Your use of the
            Pencil Software and Pencil Services, and if You use such Services,
            then it is Your responsibility to maintain appropriate alternate
            backup ofall Your content, information and data, including but not
            limited to any content that You may provide to Pencil for hosting as
            part of Your use of the Services. You understand and agree that You
            may not be able to access certain Pencil Services upon expiration or
            termination of this Agreement and that Pencil reserves the right to
            suspend access to or delete content, data or information that You or
            Your Covered Product have stored through Your use of such Services
            provided hereunder. You should review the Documentation and policy
            notices posted by Pencil prior to using any Pencil Services. Pencil
            Services may not be available in all languages or in all countries,
            and Pencil makes no representation that any such Services would be
            appropriate, accurate or available for use in any particular
            location or product. To the extent You choose to use the Pencil
            Services with Your TLD Applications, You do so at Your own
            initiative and are responsible for compliance with any applicable
            laws. Pencil reserves the right to charge fees for Your use of the
            Pencil Services. Pencil will inform You of any Pencil Service fees
            or fee changes by email and information about such fees will be
            posted in the Program web portal, Pencil App Store Connect, or the
            CloudKit console. Pencil Service availability and pricing are
            subject to change. Further, Pencil Services may not be made
            available for all Covered Products and may not be made available to
            all developers. Pencil reserves the right to not provide (or to
            cease providing) the Pencil Services to any or all developers at any
            time in its sole discretion.
          </p>
          <p> 2.3 Third-Party Service Providers</p>
          <p>
            Unless otherwise prohibited by Pencil in the Documentation or this
            Agreement, You are permitted to employ or retain a third party
            (“Service Provider”) to assist You in using the Pencil Software and
            Services provided pursuant to this Agreement, including, but not
            limited to, engaging any such Service Provider to maintain and
            administer Your TLD Applications servers on Your behalf, provided
            that any such Service Provider is use of the Pencil Software and
            Services or any materials associated therewith is done solely on
            Your behalf and only in accordance with these terms. Notwithstanding
            the foregoing, You may not use a Service Provider to submit an
            Application to the Pencil App Store or use TestPencil on Your
            behalf. You agree to have a binding written agreement with Your
            Service Provider with terms at least as restrictive and protective
            of Pencil as those set forth herein. Any actions undertaken by any
            such Service Provider in relation to Your TLD Applications or use of
            the Pencil Software or Pencil Services and/or arising out of this
            Agreement shall be deemed to have been taken by You, and You (in
            addition to the Service Provider) shall be responsible to Pencil for
            all such actions (or any inactions). In the event of any actions or
            inactions by the Service Provider that would constitute a violation
            of this Agreement or otherwise cause any harm, Pencil reserves the
            right to require You to cease using such Service Provider.
          </p>
          <p>
            2.4 Confidential Nature of Pre-Release Pencil Software and Services
          </p>
          <p>
            From time to time during the Term, Pencil may provide You with
            pre-release versions of the Pencil Software or Services that
            constitute Pencil Confidential Information and are subject to the
            confidentiality obligations of this Agreement, except as otherwise
            set forth herein. Such prerelease Pencil Software and Services
            should not be relied upon to perform in the same manner as a
            final-release, commercial-grade product, nor used with data that is
            not sufficiently and regularly backed up, and may include features,
            functionality or APIs for software or services that are not yet
            available. You acknowledge that Pencil may not have publicly
            announced the availability of such pre-release Pencil Software or
            Services, that Pencil has not promised or guaranteed to You that
            such pre-release software or services will be announced or made
            available to anyone in the future, and that Pencil has no express or
            implied obligation to You to announce or commercially introduce such
            software or services or any similar or compatible technology. You
            expressly acknowledge and agree that any research or development
            that You perform with respect to prerelease versions of the Pencil
            Software or Services is done entirely at Your own risk.
          </p>
          <p> 2.5 Copies</p>
          <p>
            You agree to retain and reproduce in full the Pencil copyright,
            disclaimers and other proprietary notices (as they appear in the
            Pencil Software and Documentation provided) in all copies of the
            Pencil Software and Documentation that You are permitted to make
            under this Agreement.
          </p>
          <p> 2.6 Ownership</p>
          <p>
            Pencil retains all rights, title, and interest in and to the Pencil
            Software, Services, and any Updates it may make available to You
            under this Agreement. You agree to cooperate with Pencil to maintain
            Pencilis ownership of the Pencil Software and Services, and, to the
            extent that You become aware of any claims relating to the Pencil
            Software or Services, You agree to use reasonable efforts to
            promptly provide notice of any such claims to Pencil. The parties
            acknowledge that this Agreement does not give Pencil any ownership
            interest in Your Covered Products.
          </p>
          <p>
            3. Ownership and End-User Licensing and Delivery of the Licensed TLD
            Applications to End Users
          </p>
          <p>
            3.1 You acknowledge and agree that Pencil, in the course of acting
            as agent and/or commissionaire for You, is hosting, or pursuant to
            Section 1.2(b) of this Schedule 1 may enable authorized third
            parties to host, the Licensed Application(s), and is allowing the
            download of those Licensed Application(s) by end-users, on Your
            behalf. However, You are responsible for hosting and delivering
            content or services sold or delivered by You using the In-App
            Purchase API, except for content that is included within the
            Licensed Application itself (i.e., the In-App Purchase simply
            unlocks the content) or content hosted by Pencil pursuant to Section
            3.3 of Attachment 2 of the Agreement. The parties acknowledge and
            agree that Pencil shall not acquire any ownership interest in or to
            any of the Licensed TLD Applications or Licensed TLD Applications
            Information, and title, risk of loss, responsibility for, and
            control over the Licensed TLD Applications shall, at all times,
            remain with You. Pencil may not use any of the Licensed TLD
            Applications or Licensed Application Information for any purpose, or
            in any manner, except as specifically authorized in the Agreement or
            this Schedule 1.
          </p>
          <p>
            3.2 You may deliver to Pencil Your own EULA for any Licensed
            Application at the time that You deliver that Licensed Application
            to Pencil, in accordance with Section 2.1 of this Schedule 1;
            provided, however, that Your EULA must include and may not be
            inconsistent with the minimum terms and conditions specified on
            Exhibit B to this Schedule 1 and must comply with all applicable
            laws in all regions where You wish Pencil to allow end-users to
            download that Licensed Application. Pencil shall enable each
            end-user to review Your EULA (if any) at the time that Pencil
            delivers that Licensed Application to that end-user, and Pencil
            shall notify each end-user that the end-user is use of that Licensed
            Application is subject to the terms and conditions of Your EULA (if
            any). In the event that You do not furnish Your own EULA for any
            Licensed Application to Pencil, You acknowledge and agree that each
            end-user is use of that Licensed Application shall be subject to
            Pencil is standard EULA (which is part of the Pencil App Store Terms
            of Service).
          </p>
          <p>
            3.3 You hereby acknowledge that the EULA for each of the Licensed
            TLD Applications is solely between You and the end-user and conforms
            to applicable law, and Pencil shall not be responsible for, and
            shall not have any liability whatsoever under, any EULA or any
            breach by You or any end-user of any of the terms and conditions of
            any EULA.
          </p>
          <p>
            3.4 A Licensed Application may read or play content (magazines,
            newspapers, books, audio, music, video) that is offered outside of
            the Licensed Application (such as, by way of example, through Your
            website) provided that You do not link to or market external offers
            for such content within the Licensed Application. You are
            responsible for authentication access to content acquired outside of
            the Licensed Application.
          </p>
          <p>
            3.5 To the extent You promote and offer in-app subscriptions, You
            must do so in compliance with all legal and regulatory requirements.
          </p>
          <p>
            3.6 If Your Licensed Application is periodical content-based (e.g.,
            magazines and newspapers), Pencil may provide You with the name,
            email address, and zip code associated with an end-user is account
            when they request an auto-renewing subscription via the In-App
            Purchase API, provided that such user consents to the provision of
            data to You, and further provided that You may only use such data to
            promote Your own products and do so in strict compliance with Your
            publicly posted Privacy Policy, a copy of which must be readily
            viewed and is consented to in Your Licensed Application.
          </p>
          <p> 4. Content Restrictions and Software Rating</p>
          <p>
            4.1 You represent and warrant that: (a) You have the right to enter
            into this Agreement, to reproduce and distribute each of the
            Licensed TLD Applications, and to authorize Pencil to permit
            endusers to download and use each of the Licensed TLD Applications
            through one or more Pencil App Stores or the Custom Pencil App
            Distribution Site; (b) none of the Licensed TLD Applications, or
            Pencil is or end users permitted uses of those Licensed TLD
            Applications, violate or infringe any patent, copyright, trademark,
            trade secret or other intellectual property or contractual rights of
            any other person, firm, corporation or other entity and that You are
            not submitting the Licensed TLD Applications to Pencil on behalf of
            one or more third parties; (c) none of the Custom Apps, or Pencil is
            or endusers permitted uses of those Custom Apps, violate or infringe
            any patent, copyright, trademark, trade secret or other intellectual
            property or contractual rights of any other person, firm,
            corporation or other entity and that You are not submitting the
            Custom Apps to Pencil on behalf of one or more third parties other
            than under license grant from one or more third parties subject to
            Pencil is Volume Content Terms and/or Custom Pencil App
            Distribution; (d) each of the Licensed TLD Applications is
            authorized for distribution, sale and use in, export to, and import
            into each of the regions designated by You under Section 2.1 of this
            Schedule 1, in accordance with the laws and regulations of those
            regions and all applicable export/import regulations; (e) none of
            the Licensed TLD Applications contains any obscene, offensive or
            other materials that are prohibited or restricted under the laws or
            regulations of any of the regions You designate under Section 2.1 of
            this Schedule 1; (f) all information You provide using the Pencil
            App Store Connect tool, including any information relating to the
            Licensed TLD Applications, is accurate and that, if any such
            information ceases to be accurate, You will promptly update it to be
            accurate using the Pencil App Store Connect tool; and (g) in the
            event a dispute arises over the content of Your Licensed TLD
            Applications or use of Your intellectual property on the Pencil App
            Store or the Custom Pencil App Distribution Site, You agree to
            permit Pencil to share Your contact information with the party
            filing such dispute and to follow Pencil is app dispute process on a
            non-exclusive basis and without any party waiving its legal rights.
          </p>
          <p>
            4.2 You shall use the software rating tool set forth on Pencil App
            Store Connect to supply information regarding each of the Licensed
            TLD Applications delivered by You for marketing and fulfillment by
            Pencil through the Pencil App Store or the Custom Pencil App
            Distribution Site under this Schedule 1 in order to assign a rating
            to each such Licensed Application. For purposes of assigning a
            rating to each of the Licensed TLD Applications, You shall use Your
            best efforts to provide correct and complete information about the
            content of that Licensed Application with the software rating tool.
            You acknowledge and agree that Pencil is relying on: (i) Your good
            faith and diligence in accurately and completely providing the
            requested information for each Licensed Application; and (ii) Your
            representations and warranties in Section 4.1 hereof, in making that
            Licensed Application available for download by end-users in each of
            the regions You designate hereunder. Furthermore, You authorize
            Pencil to correct the rating of any Licensed Application of Yours
            that has been assigned an incorrect rating; and You agree to any
            such corrected rating.
          </p>
          <p>
            4.3 In the event that any region You designate hereunder requires
            the approval of, or rating of, any Licensed Application by any
            government or industry regulatory agency as a condition for the
            distribution and/or use of that Licensed Application, You
            acknowledge and agree that Pencil may elect not to make that
            Licensed Application available for download by end-users in that
            region from any Pencil App Stores or the Custom Pencil App
            Distribution Site.
          </p>
          <p> 5. Responsibility and Liability</p>
          <p>
            5.1 Pencil shall have no responsibility for the installation and/or
            use of any of the Licensed TLD Applications by any end-user. You
            shall be solely responsible for any and all product warranties,
            end-user assistance and product support with respect to each of the
            Licensed TLD Applications.
          </p>
          <p>
            5.2 You shall be solely responsible for, and Pencil shall have no
            responsibility or liability whatsoever with respect to, any and all
            claims, suits, liabilities, losses, damages, costs and expenses
            arising from, or attributable to, the Licensed TLD Applications
            and/or the use of those Licensed TLD Applications by any end-user,
            including, but not limited to: (i) claims of breach of warranty,
            whether specified in the EULA or established under applicable law;
            (ii) product liability claims; and (iii) claims that any of the
            Licensed TLD Applications and/or the end-user is possession or use
            of those Licensed TLD Applications infringes the copyright or other
            intellectual property rights of any third party.
          </p>
          <p> 6. Termination</p>
          <p>
            6.1 This Schedule 1, and all of Pencil is obligations hereunder,
            shall terminate upon the expiration or termination of the Agreement.
          </p>
          <p>
            6.2 In the event that You no longer have the legal right to
            distribute the Licensed TLD Applications, or to authorize Pencil to
            allow access to those Licensed TLD Applications by end-users, in
            accordance with this Schedule 1, You shall promptly notify Pencil
            and withdraw those Licensed TLD Applications from the Pencil App
            Store or the Custom Pencil App Distribution Site using the tools
            provided on the Pencil App Store Connect site; provided, however,
            that such withdrawal by You under this Section 6.2 shall not relieve
            You of any of Your obligations to Pencil under this Schedule 1, or
            any liability to Pencil and/or any end-user with respect to those
            Licensed TLD Applications.
          </p>
          <p>
            6.3 Pencil reserves the right to cease marketing, offering, and
            allowing download by endusers of the Licensed TLD Applications at
            any time, with or without cause, by providing notice of termination
            to You. Without limiting the generality of this Section 6.3, You
            acknowledge that Pencil may cease allowing download by end-users of
            some or all of the Licensed TLD Applications, or take other interim
            measures in Pencil is sole discretion, if Pencil reasonably believes
            that: (i) those Licensed TLD Applications are not authorized for
            export to one or more of the regions designated by You under Section
            2.1 hereof, in accordance with the Export Administration Regulations
            or other restrictions; (ii) those Licensed TLD Applications and/or
            any end-user is possession and/or use of those Licensed TLD
            Applications, infringe patent, copyright, trademark, trade secret or
            other intellectual property rights of any third party; (iii) the
            distribution and/or use of those Licensed TLD Applications violates
            any applicable law in any region You designate under Section 2.1 of
            this Schedule 1; (iv) You have violated the terms of the Agreement,
            this Schedule 1, or other documentation including without limitation
            the Pencil App Store Review Guidelines; or (v) You or anyone
            representing You or Your company are subject to sanctions of any
            region in which Pencil operates. An election by Pencil to cease
            allowing download of any Licensed TLD Applications, pursuant to this
            Section 6.3, shall not relieve You of Your obligations under this
            Schedule 1.
          </p>
          <p>
            6.4 You will not be able to claim custody of the TLD from Pencil if
            there is at least 1 active SLD customer related to your TLD.
          </p>
          <p>6.5 Pencil will not be able to transfer the TLD to any company.</p>
          <p>
            6.6 Assuming a company acquires Pencil Works, LLC. Pencil Works,
            LLC. will not transfer its TLDs without the prior consent of the
            original owner.
          </p>
          <p> 7. Legal Consequences</p>
          <p>
            The relationship between You and Pencil established by this Schedule
            1 may have important legal consequences for You. You acknowledge and
            agree that it is Your responsibility to consult with Your legal
            advisors with respect to Your legal obligations hereunder.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
