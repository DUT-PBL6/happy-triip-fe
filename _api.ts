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
  route: Route;
  /** @format date-time */
  date: string;
  bookingDetail: BookingDetail;
}

export interface Route {
  id: number;
  name: string;
  /** @format date-time */
  departAt: string;
  /** @format date-time */
  arriveAt: string;
  fromAt: Station;
  toAt: Station;
  price: number;
  schedule: string;
  status: string;
  transport: Transport;
  partner: Partner;
  seats: Seat[];
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
}

export interface Transport {
  id: number;
  name: string;
  type: TypeVehical;
  mapSeat: number[][][];
  seatTypes: SeatType[];
  images: string[];
  utility?: Utility[];
  partner: Partner;
}

export interface RouteDto {
  fromAt: Station;
  toAt: Station;
  transport: Transport;
}

export type StationDto = object;

export interface TransportDto {
  name: string;
  type: TypeVehical;
  mapSeat: string[];
  seatTypes: SeatType[];
  images: string[];
  utility?: Utility[];
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
  userRole: string;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  userRole: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
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
  }: FullRequestParams): Observable<AxiosResponse<T>> => {
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
    systemConfigGetAll: (params: RequestParams = {}) =>
      this.request<SystemConfig[], any>({
        path: `/api/systemconfig`,
        method: "GET",
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
     * @name RouteControllerGetAll
     * @request GET:/api/route
     */
    routeGetAll: (params: RequestParams = {}) =>
      this.request<Route[], any>({
        path: `/api/route`,
        method: "GET",
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
     * @name RouteControllerUpdate
     * @request PUT:/api/route/{id}
     */
    routeUpdate: (id: string, data: RouteDto, params: RequestParams = {}) =>
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
    stationGetAll: (params: RequestParams = {}) =>
      this.request<Station[], any>({
        path: `/api/station`,
        method: "GET",
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
     * @name TransportControllerGetAll
     * @request GET:/api/transport
     */
    transportGetAll: (params: RequestParams = {}) =>
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
    transportUpdate: (id: string, data: TransportDto, params: RequestParams = {}) =>
      this.request<Transport, any>({
        path: `/api/transport/${id}`,
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
     * @name AuthControllerLogin
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
     * @name AuthControllerSignUp
     * @request POST:/api/auth/signup
     */
    authSignUp: (data: UserDto, params: RequestParams = {}) =>
      this.request<TokenResponse, any>({
        path: `/api/auth/signup`,
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
     * @name AuthControllerCreateEmployee
     * @request POST:/api/auth/employee
     */
    authCreateEmployee: (data: UserDto, params: RequestParams = {}) =>
      this.request<Employee, any>({
        path: `/api/auth/employee`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
