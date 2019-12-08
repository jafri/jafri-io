export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Syed\'s Blog',
  description: 'The professional publishing platform',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://jafri.io',
  facebook: '',
  twitter: 'https://twitter.com/TheSyedJafri',
  showSubscribe: true,
  mailchimpAction: 'https://anofron.us17.list-manage.com/subscribe/post?u=f7a154cb2fb8df75f65f63a0c&amp;id=08e3860607',
  mailchimpName: 'b_f7a154cb2fb8df75f65f63a0c_08e3860607',
  mailchimpEmailFieldName: 'EMAIL',
  googleSiteVerification: 'GoogleCode',
  footer: '',
};

export default config;
