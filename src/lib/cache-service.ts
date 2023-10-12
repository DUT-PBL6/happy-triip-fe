import * as Rx from 'rxjs';

export type Caches = {
  accessToken?: string;
};

// export type UserInfo = {
//   sub: string;
//   avatar: string;
//   roles: string[];
// };

const cacheSubjects = new Rx.BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('info') ?? '{}'));

async function setValue(values: Caches) {
  const final = {
    ...cacheSubjects.value,
    ...values,
  };
  cacheSubjects.next(final);
  if (typeof window !== 'undefined') {
    localStorage.setItem('info', JSON.stringify(final));
  }
}

const resetValue = () => {
  cacheSubjects.next({});
  if (typeof window !== 'undefined') {
    localStorage.removeItem('info');
  }
};

// function getUserInfo() {
//   const token = cacheSubjects?.value?.accessToken ?? '';
//   if (token) {
//     const infoBase64 = token.split('.')?.[1];
//     const info = Buffer.from(infoBase64, 'base64').toString('utf8');
//     return JSON.parse(info) as UserInfo;
//   }
//   return {} as UserInfo;
// }
const cacheService = {
  cache: cacheSubjects.asObservable(),
  getValue(key: string) {
    return cacheSubjects?.value?.[key] ?? '';
  },
  setValue,
  resetValue,
};
export default cacheService;
