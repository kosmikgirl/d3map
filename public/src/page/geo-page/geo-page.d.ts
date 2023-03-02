import PageElement from '../abstract/page-element';
import { CountryTypes } from '../../data/type/country-types';
import '../../component/country-card/country-card';
export default class GeoPage extends PageElement {
    static styles: any[];
    apiEndpoint: string;
    countryInformation: CountryTypes;
    _map: any;
    _rightbox: any;
    _country: any;
    _graticule: any;
    _selected: any;
    myCountries: any;
    isCardVisible: boolean;
    isMapRendered: boolean;
    constructor();
    connectedCallback(): void;
    private insertMap;
    disconnectedCallback(): void;
    private selected;
    private callCountryApi;
    private handleCloseCard;
    private insertCountryCard;
    protected updated(_changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
}
