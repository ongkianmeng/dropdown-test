import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class AppService {

    private data: any[] = [];

    constructor() {
        for (let i = 1; i < 10000; i++) {
            this.data.push({
                id: i,
                title: `${i} Sample Item`,
                description: `Some dummy description for ${i}`
            });
        }
    }

    getObjectData() {
        return this.data;
    }
}