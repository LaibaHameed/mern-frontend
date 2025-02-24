import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BaseQuery = async ({ url, method, payload, params }, { getState }) => {
    try {
        const queryUrl = new URL(url, window.location.origin);
        if (params) {
            Object.keys(params).forEach(key => {
                queryUrl.searchParams.append(key, params[key]);
            });
        }
        const token = getState()?.auth?.token;
        console.log('Token from state:', token);

        const result = await fetch(queryUrl.toString(), {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(token ? {Authorization: `Bearer ${token}`} : {} )
            },
            body: method === 'GET' ? undefined : JSON.stringify(payload),
        });

        const data = await result.json();

        if (!result.ok) {
            return { error: { status: result.status, data } };
        }

        return { data };
    } catch (error) {
        return { error: { status: 'FETCH_ERROR', data: error.message } };
    }
};

export default BaseQuery;
