import { Helmet } from "react-helmet";

const DMCA = () => {
  return (
    <>
      <Helmet>
        <title>DMCA - Free Digital Tool</title>
        <meta name="description" content="This is a description of my page." />
        <meta name="keywords" content="" />
      </Helmet>

      <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-md mt-10">
        <h2 className="text-2xl font-semibold">DMCA Generator for <b>freedigitaltool</b></h2>

        <p className="text-base">
          This Digital Millennium Copyright Act Policy (“Policy”) applies to the <b>http://freedigitaltool.com/</b> website (“Website” or “Service”) and any of its related products and services (collectively, “Services”) and outlines how this Website operator (“Operator”, “we”, “us” or “our”) addresses copyright infringement notifications and how you (“you” or “your”) may submit a copyright infringement complaint.
        </p>

        <p className="text-base">
          Protection of intellectual property is of utmost importance to us and we ask our users and their authorized agents to do the same. It is our policy to expeditiously respond to clear notifications of alleged copyright infringement that comply with the United States Digital Millennium Copyright Act (“DMCA”) of 1998, the text of which can be found on the U.S. Copyright Office{' '}
          <a href="https://www.copyright.gov/" target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">
            website
          </a>.
        </p>

        <h3 className="text-xl font-semibold">What to consider before submitting a copyright complaint</h3>

        <p className="text-base">
          Please note that if you are unsure whether the material you are reporting is in fact infringing, you may wish to contact an attorney before filing a notification with us.
        </p>

        <p className="text-base">
          The DMCA requires you to provide your personal information in the copyright infringement notification. If you are concerned about the privacy of your personal information, you may wish to{' '}
          <a href="https://www.copyrighted.com/professional-takedowns" target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">
            use an agent
          </a>{' '}
          to report infringing material for you.
        </p>

        <h3 className="text-xl font-semibold">Notifications of infringement</h3>

        <p className="text-base">
          If you are a copyright owner or an agent thereof, and you believe that any material available on our Services infringes your copyrights, then you may submit a written copyright infringement notification (“Notification”) using the contact details below pursuant to the DMCA. All such Notifications must comply with the DMCA requirements.
        </p>

        <p className="text-base">
          Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will be reviewed for accuracy, validity, and completeness. If your complaint has satisfied these requirements, our response may include the removal or restriction of access to the allegedly infringing material.
        </p>

        <p className="text-base">
          If we remove or restrict access to materials or terminate any account in response to a notification of alleged infringement, we will make a good faith effort to contact the affected user with information concerning the removal or restriction of access.
        </p>

        <p className="text-base">
          Notwithstanding anything to the contrary contained in any portion of this Policy, the Operator reserves the right to take no action upon receipt of a DMCA copyright infringement notification if it fails to comply with all the requirements of the DMCA for such notifications.
        </p>

        <h3 className="text-xl font-semibold">Changes and amendments</h3>

        <p className="text-base">
          We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will post a notification on the main page of the Website. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.
        </p>

        <p className="text-base">
          An updated version of this Policy will be effective immediately upon the posting of the revised policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes.
        </p>

        <h3 className="text-xl font-semibold">Reporting copyright infringement</h3>

        <p className="text-base">
          If you would like to notify us of the infringing material or activity, we encourage you to contact us using the details below:
        </p>

        <p className="text-base">
          Visit our Contact us page or mail us on <b>admin@freedigitaltool.com</b>
        </p>

        <p className="text-base">
          Please allow us 2-5 business working days for an email response.
        </p>
      </div>
    </>
  );
};

export default DMCA;
