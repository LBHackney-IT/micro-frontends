import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
    <div className="contact-container">
      <div className="enquiries-half">
        <div className="header-circle">
          <h1 className="lbh-heading-h1">Enquiries</h1>
        </div>
        <div className="description-container">
          <h2>For any enquiries please speak to:</h2>
          <ul className="enquiries-list">
          <li><b>Rashmi Shetty </b>[rashmi.shetty@hackney.gov.uk]- Product Owner of Platform APIs</li>
          <li><b>Mirela Georgieva </b>[mirela.georgieva@hackney.gov.uk]-Lead Developer</li>
          <li><b>Selwyn Preston</b>[selwyn.preston@hackney.gov.uk]-Lead Developer</li>
          <li><b>Matthew Keyworth</b>[matthew.keyworth@hackney.gov.uk]-Lead Developer</li>
          <li><b>Dave Dean</b>[dave.dean@hackney.gov.uk]-Lead Developer</li>
          <li><b>Bukky Omotoso </b>[Bukky.Omotoso@hackney.gov.uk]-Lead Developer</li>
          <li><b>Gareth Cozens</b>[gareth.cozens@hackney.gov.uk] - Content Creator</li>
          <li><b>Rahul Verma</b>[rahul.verma@hackney.gov.uk]- Content Creator</li>
          <li><b>Michael Sterling</b> [michael.sterling@hackney.gov.uk] - Content Creator</li>
          <li><b>Livia Basiu</b>[livia.basiu@hackney.gov.uk]-Maintainer and Collaborator</li>
          <li><b>Humairaa Mulla</b>[Humairaa.Mulla@hackney.gov.uk]- Maintainer and Collaborator</li>
          </ul>
        </div>

      </div>
      <div className="feedback-half">
        <div className="header-circle">
          <h1 className="lbh-heading-h1">Feedback</h1>
        </div>
        <div className="description-container">
          <h2>Help Us Improve</h2>
          <p>We are always looking at ways we can improve. If you have any ideas or suggestions please share your feedback with our Development Team.</p>
          <p>We welcome all feedback or ideas in order to produce the best possible experience for our users.</p>
          <p>Our email address is: <b><u>developmentteam@hackney.gov.uk </u></b></p>

        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Hello;
