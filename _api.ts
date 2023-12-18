export enum BankCardStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
}

export enum UserRoles {
  PASSENGER = 'PASSENGER',
  PARTNER = 'PARTNER',
  EMPLOYEE = 'EMPLOYEE',
}

export interface BankCard {
  id: number;
  accountNumber: string;
  accountName: string;
  bankName: string;
  status: BankCardStatus;
  isDefaultCard: boolean;
  idUser: number;
  userRoles: UserRoles;
}

export interface BankCardDto {
  accountNumber: string;
  accountName: string;
  bankName: string;
  status: BankCardStatus;
  isDefaultCard: boolean;
}

export interface AuthCredentialsDto {
  username: string;
  password: string;
  userRole: string;
}

export interface TokenResponse {
  accessToken: string;
}

export interface UserDto {
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
}

export interface Passenger {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  bonusPoint: number;
  bookings: Booking[];
}

export interface SubPoint {
  id: number;
  time: string;
  address: string;
  routePickUp: Route;
  routeDropOff: Route;
}

export enum City {
  ANGIANG = 'ANGIANG',
  BARIAVUNGTAU = 'BARIAVUNGTAU',
  BACLIEU = 'BACLIEU',
  BACKAN = 'BACKAN',
  BACGIANG = 'BACGIANG',
  BACNINH = 'BACNINH',
  BENTRE = 'BENTRE',
  BINHDUONG = 'BINHDUONG',
  BINHDINH = 'BINHDINH',
  BINHPHUOC = 'BINHPHUOC',
  BINHTHUAN = 'BINHTHUAN',
  CAMAU = 'CAMAU',
  CAOBANG = 'CAOBANG',
  CANTHO = 'CANTHO',
  DANANG = 'DANANG',
  DAKLAK = 'DAKLAK',
  DAKNONG = 'DAKNONG',
  DIENBIEN = 'DIENBIEN',
  DONGNAI = 'DONGNAI',
  DONGTHAP = 'DONGTHAP',
  GIALAI = 'GIALAI',
  HAGIANG = 'HAGIANG',
  HANAM = 'HANAM',
  HANOI = 'HANOI',
  HATAY = 'HATAY',
  HATINH = 'HATINH',
  HAIDUONG = 'HAIDUONG',
  HAIPHONG = 'HAIPHONG',
  HOABINH = 'HOABINH',
  HOCHIMINH = 'HOCHIMINH',
  HAUGIANG = 'HAUGIANG',
  HUNGYEN = 'HUNGYEN',
  KHANHHOA = 'KHANHHOA',
  KIENGIANG = 'KIENGIANG',
  KONTUM = 'KONTUM',
  LACHAU = 'LACHAU',
  LAOCAI = 'LAOCAI',
  LANGSON = 'LANGSON',
  LAMDONG = 'LAMDONG',
  LONGAN = 'LONGAN',
  NAMDINH = 'NAMDINH',
  NGHEAN = 'NGHEAN',
  NINHBINH = 'NINHBINH',
  NINHTHUAN = 'NINHTHUAN',
  PHUTHO = 'PHUTHO',
  PHUYEN = 'PHUYEN',
  QUANGBINH = 'QUANGBINH',
  QUANGNAM = 'QUANGNAM',
  QUANGNGAI = 'QUANGNGAI',
  QUANGNINH = 'QUANGNINH',
  QUANGTRI = 'QUANGTRI',
  SOCTRANG = 'SOCTRANG',
  SONLA = 'SONLA',
  TAYNINH = 'TAYNINH',
  THAIBINH = 'THAIBINH',
  THAINGUYEN = 'THAINGUYEN',
  THANHHOA = 'THANHHOA',
  THUATHIENHUE = 'THUATHIENHUE',
  TIENGIANG = 'TIENGIANG',
  TRAVINH = 'TRAVINH',
  TIENQUANG = 'TIENQUANG',
  VINHLONG = 'VINHLONG',
  VINHPHUC = 'VINHPHUC',
  YENBAI = 'YENBAI',
}

export interface Station {
  id: number;
  name: string;
  city: City;
  images: string[];
  district: string;
  ward: string;
  address: string;
  gmapLink: string;
  embedGmapLink: string;
  description: string;
}

export interface RouteSchedule {
  id: number;
  /** @format date-time */
  date: string;
  route: Route;
}

export enum TypeVehical {
  BUS = 'BUS',
  MINIVAN = 'MINIVAN',
  LIMOUSINE = 'LIMOUSINE',
  CAR = 'CAR',
  TRAIN = 'TRAIN',
  AIRPLANE = 'AIRPLANE',
}

export interface SeatType {
  id: number;
  name: string;
  description: string;
  price: number;
  transport: Transport;
}

export enum Utility {
  AIR_CONDITIONER = 'AIR_CONDITIONER',
  ALMOST_FULL = 'ALMOST_FULL',
  BED_SEAT = 'BED_SEAT',
  BLANKET = 'BLANKET',
  CANCELLATION = 'CANCELLATION',
  ENGLISH_SUPPORTED = 'ENGLISH_SUPPORTED',
  E_TICKET = 'E_TICKET',
  INSTANT_CONFIRMATION = 'INSTANT_CONFIRMATION',
  MASSAGE_SEAT = 'MASSAGE_SEAT',
  ONBOARD_ENTERTAINMENT = 'ONBOARD_ENTERTAINMENT',
  ONE_FREE_LUGGAGE = 'ONE_FREE_LUGGAGE',
  OUTLETS = 'OUTLETS',
  PILLOW = 'PILLOW',
  RECLINING_SEAT = 'RECLINING_SEAT',
  REST_ROOM_ON_BUS = 'REST_ROOM_ON_BUS',
  REST_STOP = 'REST_STOP',
  SIGHT_SEEING = 'SIGHT_SEEING',
  SIGHT_SEEING_TICKET = 'SIGHT_SEEING_TICKET',
  SNACK = 'SNACK',
  SUPPORT24X7 = 'SUPPORT_24x7',
  TOUR_GUIDE = 'TOUR_GUIDE',
  TOWEL = 'TOWEL',
  TELEVISION = 'TELEVISION',
  WATER = 'WATER',
  WIFI = 'WIFI',
}

export interface News {
  id: number;
  title: string;
  description: string;
  images: string[];
  slug: string;
  partner: Partner;
}

export interface Partner {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  description: string;
  taxCode: string;
  address: string;
  title: string;
  medialLink: string;
  routes: Route[];
  transports: Transport[];
  status: string;
  news: News[];
}

export interface Transport {
  id: number;
  name: string;
  type: TypeVehical;
  mapSeat: number[][][];
  capacity: number;
  seatTypes: SeatType[];
  images: string[];
  utility?: Utility[];
  partner: Partner;
}

export interface Route {
  id: number;
  name: string;
  departAt: string;
  arriveAt: string;
  ndays: number;
  pickUpPoints: SubPoint[];
  dropOffPoints: SubPoint[];
  fromAt: Station;
  toAt: Station;
  price: number;
  routeSchedules: RouteSchedule[];
  status: 'PENDING' | 'ACCEPTED' | 'DENIED';
  transport: Transport;
  partner: Partner;
  seats: Seat[];
}

export interface Seat {
  id: number;
  col: number;
  row: number;
  floor: number;
  /** @format date-time */
  date: string;
  route: Route;
  booking: Booking;
}

export interface Booking {
  id: number;
  bookingCode: string;
  totalAmount: number;
  /** @format date-time */
  soldOn: string;
  passenger: Passenger;
  seats: Seat[];
  status: 'PENDING' | 'MONEYPENDING' | 'SUCCESS' | 'FAILED';
}

export interface PassengerDto {
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
}

export interface PartnerDto {
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  taxCode: string;
  address: string;
  description: string;
  title: string;
  medialLink: string;
}

export enum EmployeeRoles {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
}

export interface EmployeeDto {
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  role: EmployeeRoles;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  role: string;
}

export enum SystemConfigType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Select = 'select',
}

export interface SystemConfig {
  id: number;
  name: string;
  value: string;
  archived?: boolean;
  title?: string;
  description?: string;
  /** @default "string" */
  dataType?: SystemConfigType;
}

export interface SystemConfigPagingResult {
  total: number;
  skip: number;
  take: number;
  data: SystemConfig[];
}

export interface SystemConfigDto {
  name: string;
  value: string;
  title?: string;
  description?: string;
  /** @default "string" */
  dataType?: SystemConfigType;
}

export enum EventGroup {
  ConfigGroup = 'ConfigGroup',
  Configs = 'Configs',
  Segment = 'Segment',
  AbTest = 'AbTest',
  SchemaGroup = 'SchemaGroup',
  Schema = 'Schema',
  SegmentField = 'SegmentField',
}

export interface Audit {
  id: number;
  createdBy: string;
  /** @format date-time */
  createdDate: string;
}

export interface PaymentGatewayResDto {
  result: string;
  checksum: string;
}

export interface PaymentGatewayDto {
  url: string;
  invoiceNo: string;
}

export interface SeatDto {
  col: number;
  row: number;
  floor: number;
  date: string;
  route: Route;
}

export interface BookingDto {
  seats: SeatDto[];
}

export interface BookingPagingResult {
  total: number;
  skip: number;
  take: number;
  data: Booking[];
}

export interface SearchRouteDto {
  firstCity: string;
  secondCity: string;
  firstDt: string;
  secondDt: string;
}

export interface RouteResponse {
  id: number;
  name: string;
  departAt: string;
  arriveAt: string;
  ndays: number;
  pickUpPoints: SubPoint[];
  dropOffPoints: SubPoint[];
  fromAt: Station;
  toAt: Station;
  price: number;
  routeSchedules: RouteSchedule[];
  status: 'PENDING' | 'ACCEPTED' | 'DENIED';
  transport: Transport;
  partner: Partner;
  seats: Seat[];
  date: string;
}

export interface RouteSearchResponse {
  oneWayRoutes: RouteResponse[];
  roundTripRoutes: RouteResponse[];
}

export interface SubPointDto {
  time: string;
  address: string;
}

export interface RouteScheduleDto {
  date: string;
}

export interface RouteDto {
  name: string;
  departAt: string;
  arriveAt: string;
  ndays: number;
  fromAt: Station;
  toAt: Station;
  pickUpPoints: SubPointDto[];
  dropOffPoints: SubPointDto[];
  routeSchedules: RouteScheduleDto[];
  price: number;
  transport: Transport;
}

export interface StationDto {
  name: string;
  city: City;
  district: string;
  ward: string;
  images: string[];
  address: string;
  gmapLink: string;
  embedGmapLink: string;
  description: string;
}

export interface StationPagingResult {
  total: number;
  skip: number;
  take: number;
  data: Station[];
}

export interface SeatTypeDto {
  name: string;
  description: string;
  price: number;
}

export interface TransportDto {
  name: string;
  type: TypeVehical;
  mapSeat: string[];
  seatTypes: SeatTypeDto[];
  images: string[];
  utility?: Utility[];
}

export interface NewsDto {
  title: string;
  description: string;
  slug: string;
  images: string[];
}

export interface NewsPagingResult {
  total: number;
  skip: number;
  take: number;
  data: News[];
}

import axios, { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from 'axios';
import { Observable, from } from 'rxjs';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams): Observable<T> => {
    return from(
      this.sendRequest({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params,
      }),
    );
  };

  public sendRequest = async <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title API
 * @version 2.0
 * @contact
 *
 * API docs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerGetInfo
   * @request GET:/
   */
  appGetInfo = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: 'GET',
      ...params,
    });

  api = {
    /**
     * No description
     *
     * @tags bank-card
     * @name BankCardControllerGetBankCardByPartnerId
     * @summary Get bank card by partnerId
     * @request GET:/api/bank-card/partner/{id}
     */
    bankCardGetBankCardByPartnerId: (
      id: string,
      query: {
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card/partner/${id}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-card
     * @name BankCardControllerGetBankCardByPassengerId
     * @summary Get bank card by passengerId
     * @request GET:/api/bank-card/passenger/{id}
     */
    bankCardGetBankCardByPassengerId: (
      id: string,
      query: {
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card/passenger/${id}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-card
     * @name BankCardControllerGetBankCardByUser
     * @summary Get bank card by user
     * @request GET:/api/bank-card
     */
    bankCardGetBankCardByUser: (params: RequestParams = {}) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-card
     * @name BankCardControllerCreateBankCardByUser
     * @summary Create bank card by user
     * @request POST:/api/bank-card
     */
    bankCardCreateBankCardByUser: (data: BankCardDto, params: RequestParams = {}) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-card
     * @name BankCardControllerUpdateBankCardByUser
     * @summary Update bank card by user
     * @request PUT:/api/bank-card/{id}
     */
    bankCardUpdateBankCardByUser: (
      id: string,
      query: {
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card/${id}`,
        method: 'PUT',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-card
     * @name BankCardControllerUpdate
     * @request PUT:/api/bankcard/{id}
     */
    bankCardUpdate: (id: number, data: BankCardDto, params: RequestParams = {}) =>
      this.request<BankCard, any>({
        path: `/api/bankcard/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLogin
     * @summary Login
     * @request POST:/api/auth/login
     */
    authLogin: (data: AuthCredentialsDto, params: RequestParams = {}) =>
      this.request<TokenResponse, any>({
        path: `/api/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerPassengerSignUp
     * @summary Passenger signup
     * @request POST:/api/auth/passenger/signup
     */
    authPassengerSignUp: (data: UserDto, params: RequestParams = {}) =>
      this.request<TokenResponse, any>({
        path: `/api/auth/passenger/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerGetDetailPassenger
     * @summary Get detail of passenger for view profile
     * @request GET:/api/auth/passenger
     */
    authGetDetailPassenger: (params: RequestParams = {}) =>
      this.request<Passenger, any>({
        path: `/api/auth/passenger`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerUpdatePassenger
     * @summary Update passenger
     * @request PUT:/api/auth/passenger
     */
    authUpdatePassenger: (data: PassengerDto, params: RequestParams = {}) =>
      this.request<Passenger, any>({
        path: `/api/auth/passenger`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerPartnerSignUp
     * @summary Partner signup
     * @request POST:/api/auth/partner/signup
     */
    authPartnerSignUp: (data: UserDto, params: RequestParams = {}) =>
      this.request<TokenResponse, any>({
        path: `/api/auth/partner/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerDenyAccountPartner
     * @summary Deny partner
     * @request POST:/api/auth/partner/deny/{id}
     */
    authDenyAccountPartner: (id: number, params: RequestParams = {}) =>
      this.request<Partner, any>({
        path: `/api/auth/partner/deny/${id}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerAcceptAccountPartner
     * @summary Accept partner
     * @request POST:/api/auth/partner/accept/{id}
     */
    authAcceptAccountPartner: (id: number, params: RequestParams = {}) =>
      this.request<Partner, any>({
        path: `/api/auth/partner/accept/${id}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerGetDetailPartner
     * @summary Get detail of partner for view profile
     * @request GET:/api/auth/partner/profile
     */
    authGetDetailPartner: (params: RequestParams = {}) =>
      this.request<Partner, any>({
        path: `/api/auth/partner/profile`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerGetAllPartnerPending
     * @summary Get all partner pending
     * @request GET:/api/auth/partner/pending
     */
    authGetAllPartnerPending: (params: RequestParams = {}) =>
      this.request<Partner[], any>({
        path: `/api/auth/partner/pending`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerGetPartnerById
     * @summary Get partner by id
     * @request GET:/api/auth/partner/{id}
     */
    authGetPartnerById: (id: number, params: RequestParams = {}) =>
      this.request<Partner, any>({
        path: `/api/auth/partner/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerGetAllPartner
     * @summary Get all partner
     * @request GET:/api/auth/partner
     */
    authGetAllPartner: (params: RequestParams = {}) =>
      this.request<Partner[], any>({
        path: `/api/auth/partner`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerUpdatePartner
     * @summary Update partner
     * @request PUT:/api/auth/partner
     */
    authUpdatePartner: (data: PartnerDto, params: RequestParams = {}) =>
      this.request<Partner, any>({
        path: `/api/auth/partner`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerCreateEmployee
     * @summary Create employee
     * @request POST:/api/auth/employee
     */
    authCreateEmployee: (data: EmployeeDto, params: RequestParams = {}) =>
      this.request<Employee, any>({
        path: `/api/auth/employee`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerGetAllEmployee
     * @summary Get all employee
     * @request GET:/api/auth/employee
     */
    authGetAllEmployee: (params: RequestParams = {}) =>
      this.request<Employee[], any>({
        path: `/api/auth/employee`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerUpdateEmployee
     * @summary Update employee
     * @request PUT:/api/auth/employee/{id}
     */
    authUpdateEmployee: (id: number, data: EmployeeDto, params: RequestParams = {}) =>
      this.request<Employee, any>({
        path: `/api/auth/employee/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags system-config
     * @name SystemConfigControllerGetAll
     * @request GET:/api/systemconfig/all
     */
    systemConfigGetAll: (
      query?: {
        /** Order */
        order?: any;
        /** Where filter */
        where?: any;
        /** Skip */
        skip?: number;
        /** Page size */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SystemConfigPagingResult, any>({
        path: `/api/systemconfig/all`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags system-config
     * @name SystemConfigControllerCreate
     * @request POST:/api/systemconfig
     */
    systemConfigCreate: (data: SystemConfigDto, params: RequestParams = {}) =>
      this.request<SystemConfig, any>({
        path: `/api/systemconfig`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags system-config
     * @name SystemConfigControllerGetById
     * @request GET:/api/systemconfig/{id}
     */
    systemConfigGetById: (id: number, params: RequestParams = {}) =>
      this.request<SystemConfig, any>({
        path: `/api/systemconfig/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags system-config
     * @name SystemConfigControllerUpdate
     * @request PUT:/api/systemconfig/{id}
     */
    systemConfigUpdate: (id: number, data: SystemConfigDto, params: RequestParams = {}) =>
      this.request<SystemConfig, any>({
        path: `/api/systemconfig/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Audit
     * @name AuditControllerGetListFilteredAudit
     * @summary get audit by bucketid
     * @request GET:/api/{bucketId}/audit
     */
    auditGetListFilteredAudit: (
      bucketId: number,
      query?: {
        message?: string;
        reference?: string;
        eventGroup?: EventGroup[];
      },
      params: RequestParams = {},
    ) =>
      this.request<Audit[], any>({
        path: `/api/${bucketId}/audit`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerUpdateStatus
     * @request POST:/api/booking/update-status
     */
    bookingUpdateStatus: (data: PaymentGatewayResDto, params: RequestParams = {}) =>
      this.request<PaymentGatewayDto, any>({
        path: `/api/booking/update-status`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetStatus
     * @request GET:/api/booking/status/{invoiceNo}
     */
    bookingGetStatus: (invoiceNo: string, params: RequestParams = {}) =>
      this.request<PaymentGatewayDto, any>({
        path: `/api/booking/status/${invoiceNo}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerBooking
     * @request POST:/api/booking
     */
    bookingBooking: (data: BookingDto, params: RequestParams = {}) =>
      this.request<PaymentGatewayDto, any>({
        path: `/api/booking`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetAllBookingOfPassenger
     * @request GET:/api/booking
     */
    bookingGetAllBookingOfPassenger: (params: RequestParams = {}) =>
      this.request<Booking[], any>({
        path: `/api/booking`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerBookingCash
     * @request POST:/api/booking/cash
     */
    bookingBookingCash: (data: BookingDto, params: RequestParams = {}) =>
      this.request<PaymentGatewayDto, any>({
        path: `/api/booking/cash`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetBookingMoneyPending
     * @request GET:/api/booking/money-pending
     */
    bookingGetBookingMoneyPending: (params: RequestParams = {}) =>
      this.request<Booking[], any>({
        path: `/api/booking/money-pending`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetBookingRecentOrders
     * @request GET:/api/booking/recent-orders
     */
    bookingGetBookingRecentOrders: (params: RequestParams = {}) =>
      this.request<Booking[], any>({
        path: `/api/booking/recent-orders`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetYearlySalesReport
     * @request POST:/api/booking/sales-report/year/{year}
     */
    bookingGetYearlySalesReport: (year: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/booking/sales-report/year/${year}`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetMonthlySalesReport
     * @request POST:/api/booking/sales-report/month/{month}
     */
    bookingGetMonthlySalesReport: (month: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/booking/sales-report/month/${month}`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetDailySalesReport
     * @request GET:/api/booking/sales-report/day
     */
    bookingGetDailySalesReport: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/booking/sales-report/day`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerConfirmPayment
     * @request PUT:/api/booking/confirm-payment/{id}
     */
    bookingConfirmPayment: (id: number, params: RequestParams = {}) =>
      this.request<Booking, any>({
        path: `/api/booking/confirm-payment/${id}`,
        method: 'PUT',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerAcceptBooking
     * @request PUT:/api/booking/accept-booking/{id}
     */
    bookingAcceptBooking: (id: number, params: RequestParams = {}) =>
      this.request<Booking, any>({
        path: `/api/booking/accept-booking/${id}`,
        method: 'PUT',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerDenyBooking
     * @request PUT:/api/booking/deny-booking/{id}
     */
    bookingDenyBooking: (id: number, params: RequestParams = {}) =>
      this.request<Booking, any>({
        path: `/api/booking/deny-booking/${id}`,
        method: 'PUT',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetById
     * @request GET:/api/booking/{id}
     */
    bookingGetById: (id: number, params: RequestParams = {}) =>
      this.request<Booking, any>({
        path: `/api/booking/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingControllerGetAll
     * @request GET:/api/booking/all
     */
    bookingGetAll: (
      query?: {
        /** Order */
        order?: any;
        /** Where filter */
        where?: any;
        /** Skip */
        skip?: number;
        /** Page size */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BookingPagingResult, any>({
        path: `/api/booking/all`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerGetAllRoutesOfPartner
     * @request GET:/api/route
     */
    routeGetAllRoutesOfPartner: (params: RequestParams = {}) =>
      this.request<Route[], any>({
        path: `/api/route`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerCreate
     * @request POST:/api/route
     */
    routeCreate: (data: RouteDto, params: RequestParams = {}) =>
      this.request<Route, any>({
        path: `/api/route`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerGetAllRoutesByPartnerId
     * @request GET:/api/route/partner/{id}
     */
    routeGetAllRoutesByPartnerId: (id: number, params: RequestParams = {}) =>
      this.request<Route[], any>({
        path: `/api/route/partner/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerGetRoutesPending
     * @request GET:/api/route/pending
     */
    routeGetRoutesPending: (params: RequestParams = {}) =>
      this.request<Route[], any>({
        path: `/api/route/pending`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerSearch
     * @request POST:/api/route/search
     */
    routeSearch: (data: SearchRouteDto, params: RequestParams = {}) =>
      this.request<RouteSearchResponse, any>({
        path: `/api/route/search`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerGetRouteByIdAndDate
     * @request GET:/api/route/{id}/date/{date}
     */
    routeGetRouteByIdAndDate: (id: number, date: string, params: RequestParams = {}) =>
      this.request<Route, any>({
        path: `/api/route/${id}/date/${date}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerUpdateById
     * @request PUT:/api/route/{id}
     */
    routeUpdateById: (id: number, data: RouteDto, params: RequestParams = {}) =>
      this.request<Route, any>({
        path: `/api/route/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerGetRouteById
     * @request GET:/api/route/{id}
     */
    routeGetRouteById: (id: number, params: RequestParams = {}) =>
      this.request<Route, any>({
        path: `/api/route/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerAcceptRoute
     * @request POST:/api/route/accept/{id}
     */
    routeAcceptRoute: (id: number, params: RequestParams = {}) =>
      this.request<Route, any>({
        path: `/api/route/accept/${id}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerDenyRoute
     * @request POST:/api/route/deny/{id}
     */
    routeDenyRoute: (id: number, params: RequestParams = {}) =>
      this.request<Route, any>({
        path: `/api/route/deny/${id}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name HealthControllerCheck
     * @request GET:/api/health
     */
    healthCheck: (params: RequestParams = {}) =>
      this.request<
        {
          /** @example "ok" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {} */
          error?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {"database":{"status":"up"}} */
          details?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
        },
        {
          /** @example "error" */
          status?: string;
          /** @example {"database":{"status":"up"}} */
          info?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {"redis":{"status":"down","message":"Could not connect"}} */
          error?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
          /** @example {"database":{"status":"up"},"redis":{"status":"down","message":"Could not connect"}} */
          details?: Record<
            string,
            {
              status?: string;
              [key: string]: any;
            }
          >;
        }
      >({
        path: `/api/health`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerCreate
     * @summary Create station
     * @request POST:/api/station
     */
    stationCreate: (data: StationDto, params: RequestParams = {}) =>
      this.request<Station, any>({
        path: `/api/station`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerUpdateById
     * @summary Update station
     * @request PUT:/api/station/{id}
     */
    stationUpdateById: (id: number, data: StationDto, params: RequestParams = {}) =>
      this.request<Station, any>({
        path: `/api/station/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerDelete
     * @summary Delete station
     * @request DELETE:/api/station/{id}
     */
    stationDelete: (id: number, params: RequestParams = {}) =>
      this.request<Station, any>({
        path: `/api/station/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerGetById
     * @request GET:/api/station/{id}
     */
    stationGetById: (id: number, params: RequestParams = {}) =>
      this.request<Station, any>({
        path: `/api/station/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerGetAll
     * @request GET:/api/station/all
     */
    stationGetAll: (
      query?: {
        /** Order */
        order?: any;
        /** Where filter */
        where?: any;
        /** Skip */
        skip?: number;
        /** Page size */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StationPagingResult, any>({
        path: `/api/station/all`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @name AwsControllerUploadFile
     * @request POST:/api/aws
     */
    awsUploadFile: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/aws`,
        method: 'POST',
        ...params,
      }),

    /**
     * No description
     *
     * @name AwsControllerDeleteFile
     * @request DELETE:/api/aws/{key}
     */
    awsDeleteFile: (key: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/aws/${key}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transport
     * @name TransportControllerCreate
     * @summary Create transport
     * @request POST:/api/transport
     */
    transportCreate: (data: TransportDto, params: RequestParams = {}) =>
      this.request<Transport, any>({
        path: `/api/transport`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transport
     * @name TransportControllerGetAllTransport
     * @summary Get all transport by partner
     * @request GET:/api/transport
     */
    transportGetAllTransport: (params: RequestParams = {}) =>
      this.request<Transport[], any>({
        path: `/api/transport`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transport
     * @name TransportControllerUpdateById
     * @summary Update transport
     * @request PUT:/api/transport/{id}
     */
    transportUpdateById: (id: number, data: TransportDto, params: RequestParams = {}) =>
      this.request<Transport, any>({
        path: `/api/transport/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transport
     * @name TransportControllerGetById
     * @request GET:/api/transport/{id}
     */
    transportGetById: (id: number, params: RequestParams = {}) =>
      this.request<Transport, any>({
        path: `/api/transport/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsControllerGetAllNews
     * @summary Get all news
     * @request GET:/api/news
     */
    newsGetAllNews: (params: RequestParams = {}) =>
      this.request<News[], any>({
        path: `/api/news`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsControllerCreateNews
     * @summary Create news
     * @request POST:/api/news
     */
    newsCreateNews: (data: NewsDto, params: RequestParams = {}) =>
      this.request<News, any>({
        path: `/api/news`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsControllerGetAllNewsOfPartner
     * @summary Get all news of partner
     * @request GET:/api/news/partner
     */
    newsGetAllNewsOfPartner: (params: RequestParams = {}) =>
      this.request<News[], any>({
        path: `/api/news/partner`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsControllerGetById
     * @request GET:/api/news/{id}
     */
    newsGetById: (id: number, params: RequestParams = {}) =>
      this.request<News, any>({
        path: `/api/news/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsControllerUpdateNews
     * @summary Update news
     * @request PUT:/api/news/{id}
     */
    newsUpdateNews: (id: number, data: NewsDto, params: RequestParams = {}) =>
      this.request<News, any>({
        path: `/api/news/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsControllerDeleteNews
     * @summary Delete news
     * @request DELETE:/api/news/{id}
     */
    newsDeleteNews: (id: number, params: RequestParams = {}) =>
      this.request<News, any>({
        path: `/api/news/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags News
     * @name NewsControllerGetAll
     * @request GET:/api/news/all
     */
    newsGetAll: (
      query?: {
        /** Order */
        order?: any;
        /** Where filter */
        where?: any;
        /** Skip */
        skip?: number;
        /** Page size */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<NewsPagingResult, any>({
        path: `/api/news/all`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
}
