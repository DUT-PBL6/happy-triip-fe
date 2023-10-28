export enum BankCardStatus {
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
}

export enum UserRoles {
  PASSENGER = "PASSENGER",
  PARTNER = "PARTNER",
  EMPLOYEE = "EMPLOYEE",
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

export enum SystemConfigType {
  String = "string",
  Number = "number",
  Boolean = "boolean",
  Select = "select",
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
  ConfigGroup = "ConfigGroup",
  Configs = "Configs",
  Segment = "Segment",
  AbTest = "AbTest",
  SchemaGroup = "SchemaGroup",
  Schema = "Schema",
  SegmentField = "SegmentField",
}

export interface Audit {
  id: number;
  createdBy: string;
  /** @format date-time */
  createdDate: string;
}

export interface SearchRouteDto {
  firstCity: string;
  secondCity: string;
  firstDt: string;
  secondDt: string;
}

export enum City {
  ANGIANG = "ANGIANG",
  BARIAVUNGTAU = "BARIAVUNGTAU",
  BACLIEU = "BACLIEU",
  BACKAN = "BACKAN",
  BACGIANG = "BACGIANG",
  BACNINH = "BACNINH",
  BENTRE = "BENTRE",
  BINHDUONG = "BINHDUONG",
  BINHDINH = "BINHDINH",
  BINHPHUOC = "BINHPHUOC",
  BINHTHUAN = "BINHTHUAN",
  CAMAU = "CAMAU",
  CAOBANG = "CAOBANG",
  CANTHO = "CANTHO",
  DANANG = "DANANG",
  DAKLAK = "DAKLAK",
  DAKNONG = "DAKNONG",
  DIENBIEN = "DIENBIEN",
  DONGNAI = "DONGNAI",
  DONGTHAP = "DONGTHAP",
  GIALAI = "GIALAI",
  HAGIANG = "HAGIANG",
  HANAM = "HANAM",
  HANOI = "HANOI",
  HATAY = "HATAY",
  HATINH = "HATINH",
  HAIDUONG = "HAIDUONG",
  HAIPHONG = "HAIPHONG",
  HOABINH = "HOABINH",
  HOCHIMINH = "HOCHIMINH",
  HAUGIANG = "HAUGIANG",
  HUNGYEN = "HUNGYEN",
  KHANHHOA = "KHANHHOA",
  KIENGIANG = "KIENGIANG",
  KONTUM = "KONTUM",
  LACHAU = "LACHAU",
  LAOCAI = "LAOCAI",
  LANGSON = "LANGSON",
  LAMDONG = "LAMDONG",
  LONGAN = "LONGAN",
  NAMDINH = "NAMDINH",
  NGHEAN = "NGHEAN",
  NINHBINH = "NINHBINH",
  NINHTHUAN = "NINHTHUAN",
  PHUTHO = "PHUTHO",
  PHUYEN = "PHUYEN",
  QUANGBINH = "QUANGBINH",
  QUANGNAM = "QUANGNAM",
  QUANGNGAI = "QUANGNGAI",
  QUANGNINH = "QUANGNINH",
  QUANGTRI = "QUANGTRI",
  SOCTRANG = "SOCTRANG",
  SONLA = "SONLA",
  TAYNINH = "TAYNINH",
  THAIBINH = "THAIBINH",
  THAINGUYEN = "THAINGUYEN",
  THANHHOA = "THANHHOA",
  THUATHIENHUE = "THUATHIENHUE",
  TIENGIANG = "TIENGIANG",
  TRAVINH = "TRAVINH",
  TIENQUANG = "TIENQUANG",
  VINHLONG = "VINHLONG",
  VINHPHUC = "VINHPHUC",
  YENBAI = "YENBAI",
}

export interface Station {
  id: number;
  name: string;
  city: City;
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
  BUS = "BUS",
  MINIVAN = "MINIVAN",
  LIMOUSINE = "LIMOUSINE",
  CAR = "CAR",
  TRAIN = "TRAIN",
  AIRPLANE = "AIRPLANE",
}

export interface SeatType {
  id: number;
  name: string;
  description: string;
  price: number;
  transport: Transport;
}

export enum Utility {
  AIR_CONDITIONER = "AIR_CONDITIONER",
  ALMOST_FULL = "ALMOST_FULL",
  BED_SEAT = "BED_SEAT",
  BLANKET = "BLANKET",
  CANCELLATION = "CANCELLATION",
  ENGLISH_SUPPORTED = "ENGLISH_SUPPORTED",
  E_TICKET = "E_TICKET",
  INSTANT_CONFIRMATION = "INSTANT_CONFIRMATION",
  MASSAGE_SEAT = "MASSAGE_SEAT",
  ONBOARD_ENTERTAINMENT = "ONBOARD_ENTERTAINMENT",
  ONE_FREE_LUGGAGE = "ONE_FREE_LUGGAGE",
  OUTLETS = "OUTLETS",
  PILLOW = "PILLOW",
  RECLINING_SEAT = "RECLINING_SEAT",
  REST_ROOM_ON_BUS = "REST_ROOM_ON_BUS",
  REST_STOP = "REST_STOP",
  SIGHT_SEEING = "SIGHT_SEEING",
  SIGHT_SEEING_TICKET = "SIGHT_SEEING_TICKET",
  SNACK = "SNACK",
  SUPPORT24X7 = "SUPPORT_24x7",
  TOUR_GUIDE = "TOUR_GUIDE",
  TOWEL = "TOWEL",
  TELEVISION = "TELEVISION",
  WATER = "WATER",
  WIFI = "WIFI",
}

export interface Partner {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  description: string;
  title: string;
  medialLink: string;
  routes: Route[];
  transports: Transport[];
  status: string;
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

export interface Booking {
  id: number;
  name: string;
  bookingCode: string;
  /** @format date-time */
  soldOn: string;
  bookingDetail: BookingDetail[];
  passenger: Passenger;
  status: string;
}

export interface BookingDetail {
  id: number;
  booking: Booking;
  route: Route;
  seats: Seat[];
  /** @format date-time */
  departAt: string;
}

export interface Seat {
  id: number;
  seatCode: string;
  col: number;
  row: number;
  floor: number;
  route: Route;
  /** @format date-time */
  date: string;
  bookingDetail: BookingDetail;
}

export interface Route {
  id: number;
  name: string;
  departAt: string;
  arriveAt: string;
  pickUpPoint: Record<string, string>;
  dropOffPoint: Record<string, string>;
  fromAt: Station;
  toAt: Station;
  price: number;
  routeSchedules: RouteSchedule[];
  status: "PENDING" | "ACCEPTED" | "DENIED";
  transport: Transport;
  partner: Partner;
  seats: Seat[];
}

export interface RouteSearchResponse {
  oneWayRoutes: Route[];
  roundTripRoutes: Route[];
}

export interface RouteScheduleDto {
  date: string;
}

export interface RouteDto {
  name: string;
  departAt: string;
  arriveAt: string;
  fromAt: Station;
  toAt: Station;
  pickUpPoint: Record<string, string>;
  dropOffPoint: Record<string, string>;
  routeSchedules: RouteScheduleDto[];
  price: number;
  transport: Transport;
}

export interface RoutePagingResult {
  total: number;
  skip: number;
  take: number;
  data: Route[];
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

export interface PartnerDto {
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  description: string;
  title: string;
  medialLink: string;
}

export enum EmployeeRoles {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
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

export type StationDto = object;

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

import axios, { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from "axios";
import { Observable, from } from "rxjs";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
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
    if (typeof formItem === "object" && formItem !== null) {
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

  public request = <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Observable<T> => {
    return from(
      this.sendRequest({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params,
      })
    );
  };

  public sendRequest = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
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
      method: "GET",
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
    bankCardGetBankCardByPartnerId: (id: string, params: RequestParams = {}) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card/partner/${id}`,
        method: "GET",
        format: "json",
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
    bankCardGetBankCardByPassengerId: (id: string, params: RequestParams = {}) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card/passenger/${id}`,
        method: "GET",
        format: "json",
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
        method: "GET",
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
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
    bankCardUpdateBankCardByUser: (id: string, params: RequestParams = {}) =>
      this.request<BankCard[], any>({
        path: `/api/bank-card/${id}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bank-card
     * @name BankCardControllerUpdate
     * @request PUT:/api/bankcard/{id}
     */
    bankCardUpdate: (id: string, data: BankCardDto, params: RequestParams = {}) =>
      this.request<BankCard, any>({
        path: `/api/bankcard/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system-config
     * @name SystemConfigControllerGetAll
     * @request GET:/api/systemconfig
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
      params: RequestParams = {}
    ) =>
      this.request<SystemConfigPagingResult, any>({
        path: `/api/systemconfig`,
        method: "GET",
        query: query,
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system-config
     * @name SystemConfigControllerGetById
     * @request GET:/api/systemconfig/{id}
     */
    systemConfigGetById: (id: string, params: RequestParams = {}) =>
      this.request<SystemConfig, any>({
        path: `/api/systemconfig/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system-config
     * @name SystemConfigControllerUpdate
     * @request PUT:/api/systemconfig/{id}
     */
    systemConfigUpdate: (id: string, data: SystemConfigDto, params: RequestParams = {}) =>
      this.request<SystemConfig, any>({
        path: `/api/systemconfig/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
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
      params: RequestParams = {}
    ) =>
      this.request<Audit[], any>({
        path: `/api/${bucketId}/audit`,
        method: "GET",
        query: query,
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerGetAll
     * @request GET:/api/route
     */
    routeGetAll: (
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
      params: RequestParams = {}
    ) =>
      this.request<RoutePagingResult, any>({
        path: `/api/route`,
        method: "GET",
        query: query,
        format: "json",
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
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Route
     * @name RouteControllerGetById
     * @request GET:/api/route/{id}
     */
    routeGetById: (id: string, params: RequestParams = {}) =>
      this.request<Route, any>({
        path: `/api/route/${id}`,
        method: "GET",
        format: "json",
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
        method: "POST",
        format: "json",
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
        method: "POST",
        format: "json",
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
        method: "GET",
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerUpdatePassenger
     * @summary Update passenger
     * @request GET:/api/auth/passenger
     */
    authUpdatePassenger: (params: RequestParams = {}) =>
      this.request<Passenger, any>({
        path: `/api/auth/passenger`,
        method: "GET",
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "GET",
        format: "json",
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
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "GET",
        format: "json",
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
        method: "GET",
        format: "json",
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
        method: "POST",
        format: "json",
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
        method: "POST",
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "GET",
        format: "json",
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
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerGetAll
     * @request GET:/api/station
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
      params: RequestParams = {}
    ) =>
      this.request<StationPagingResult, any>({
        path: `/api/station`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerUpdate
     * @summary Update station
     * @request PUT:/api/station/{id}
     */
    stationUpdate: (id: string, params: RequestParams = {}) =>
      this.request<Station, any>({
        path: `/api/station/${id}`,
        method: "PUT",
        format: "json",
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
    stationDelete: (id: string, params: RequestParams = {}) =>
      this.request<Station, any>({
        path: `/api/station/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Station
     * @name StationControllerGetById
     * @request GET:/api/station/{id}
     */
    stationGetById: (id: string, params: RequestParams = {}) =>
      this.request<Station, any>({
        path: `/api/station/${id}`,
        method: "GET",
        format: "json",
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
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
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
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transport
     * @name TransportControllerGetById
     * @request GET:/api/transport/{id}
     */
    transportGetById: (id: string, params: RequestParams = {}) =>
      this.request<Transport, any>({
        path: `/api/transport/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transport
     * @name TransportControllerUpdate
     * @request PUT:/api/transport/{id}
     */
    transportUpdate: (id: number, data: TransportDto, params: RequestParams = {}) =>
      this.request<Transport, any>({
        path: `/api/transport/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
