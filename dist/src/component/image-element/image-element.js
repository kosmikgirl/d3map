var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import imageSizeDirective from '../../data/constant/image-size-directive';
import { styles } from './styles';
let ImageElement = class ImageElement extends LitElement {
    constructor() {
        super();
        this.imageSet = [];
        this.alt = '';
        this.srcSet = '';
        this.lazyLoadObserver = new IntersectionObserver(([intersectedImage]) => this.loadIntersectedImage(intersectedImage));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.lazyLoadObserver.disconnect();
    }
    firstUpdated() {
        this.lazyLoadObserver.observe(this.$img);
    }
    async loadIntersectedImage(image) {
        if (!image.isIntersecting)
            return;
        const $img = image.target;
        if (!$img)
            return;
        if (this.lazyLoadObserver)
            this.lazyLoadObserver.unobserve(this.$img);
        $img.sizes = this.$img.dataset.sizes;
        $img.srcset = this.$img.dataset.srcset;
        $img.src = this.$img.dataset.src;
    }
    willUpdate(changedProps) {
        if (!changedProps.has('src') && !changedProps.has('sizes'))
            return;
        this.srcSet = this.imageSet.reduce((result, image, index) => `${result}${image} ${imageSizeDirective[index]}w, `, '');
    }
    render() {
        return html `
      <picture>
        <img
          data-sizes="(max-width: 1400px) 100vw, 1400px"
          data-srcset=${this.srcSet}
          data-src=${this.imageSet[this.imageSet.length - 1]}
          alt=${this.alt}
        />
      </picture>
    `;
    }
};
ImageElement.styles = styles;
__decorate([
    property({ type: Array })
], ImageElement.prototype, "imageSet", void 0);
__decorate([
    property()
], ImageElement.prototype, "alt", void 0);
__decorate([
    state()
], ImageElement.prototype, "srcSet", void 0);
__decorate([
    query('img')
], ImageElement.prototype, "$img", void 0);
ImageElement = __decorate([
    customElement('image-element')
], ImageElement);
export { ImageElement };
//# sourceMappingURL=image-element.js.map