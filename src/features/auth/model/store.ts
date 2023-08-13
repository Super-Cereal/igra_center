import { createStore, createEffect, createEvent } from 'effector';

import type { AuthData, AuthStore } from './typings';

export const $authStore = createStore<AuthStore>({});

export const postCheckAuth = createEffect((payload: { login: string; password: string }) => {
    setNoError();

    // фиктивная штучка, чтоб можно было без бэка логиниться
    return new Promise<AuthData>((resolve, reject) => {
        setTimeout(() => {
            resolve({ type: 'curator' });
        }, 3000);
    });
});

$authStore.on(postCheckAuth.doneData, (store, res: AuthData) => {
    return { data: res, error: false };
});

export const setNoError = createEvent();

$authStore.on(setNoError, (store) => {
    return { data: store.data, error: false };
});