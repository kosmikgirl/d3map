import data from '../data/site/metadata.json';
import { SeoAttribute, SeoType } from '../data/enum/';
export default class SEO {
}
SEO.setSiteMetadata = (pageMetadata) => {
    var _a, _b, _c, _d, _e;
    const { head } = document;
    if (!head)
        return;
    const seoElements = document.querySelectorAll('[data-type="seo"]');
    seoElements.forEach(element => {
        element.remove();
    });
    const { author, authorType, banner, description, globalTitle, language, logo, social, title, } = data.site;
    const seoUrl = window.location.href;
    const seoTitle = `${(_a = pageMetadata.title) !== null && _a !== void 0 ? _a : title}${globalTitle !== null && globalTitle !== void 0 ? globalTitle : ''}`;
    const seoDescription = (_b = pageMetadata.description) !== null && _b !== void 0 ? _b : description;
    const seoBanner = `${seoUrl}${(_c = pageMetadata.banner) !== null && _c !== void 0 ? _c : banner.url}`;
    const seoBannerAlt = (_d = pageMetadata.bannerAlt) !== null && _d !== void 0 ? _d : banner.alt;
    const seoContentType = (_e = pageMetadata.contentType) !== null && _e !== void 0 ? _e : 'Website';
    const twitterData = {
        card: 'summary',
        title: seoTitle,
        description: seoDescription,
        url: seoUrl,
        image: seoBanner,
        alt: seoBannerAlt,
        site: social.twitter.user,
    };
    const facebookData = {
        type: seoContentType,
        title: seoTitle,
        description: seoDescription,
        url: seoUrl,
        locale: language,
        image: seoBanner,
        imageAlt: seoBannerAlt,
        site_name: title,
    };
    document.title = seoTitle;
    const setMetaTag = (attribute, type, data) => {
        const meta = document.createElement('meta');
        meta.setAttribute(attribute, type);
        meta.setAttribute(SeoAttribute.CONTENT, data);
        meta.dataset.type = 'seo';
        head.appendChild(meta);
    };
    setMetaTag(SeoAttribute.NAME, SeoType.DESCRIPTION, seoDescription);
    setMetaTag(SeoAttribute.NAME, SeoType.IMAGE, seoBanner);
    Object.entries(twitterData).forEach(([key, value]) => {
        setMetaTag(SeoAttribute.NAME, `twitter:${key === 'alt' ? 'image:alt' : key}`, value);
    });
    Object.entries(facebookData).forEach(([key, value]) => {
        setMetaTag(SeoAttribute.PROPERTY, `og:${key}`, value);
    });
    const schemaWebPage = {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: seoUrl,
        description: description,
        inLanguage: language,
        mainEntityOfPage: seoUrl,
        name: seoTitle,
        author: {
            '@type': authorType,
            name: author,
        },
        copyrightHolder: {
            '@type': authorType,
            name: author,
        },
        copyrightYear: new Date().getFullYear().toString(),
        creator: {
            '@type': authorType,
            name: author,
        },
        publisher: {
            '@type': authorType,
            name: author,
        },
        image: {
            '@type': 'ImageObject',
            url: logo,
        },
    };
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.innerHTML = JSON.stringify(schemaWebPage);
    script.dataset.type = 'seo';
    head.appendChild(script);
};
//# sourceMappingURL=seo.js.map