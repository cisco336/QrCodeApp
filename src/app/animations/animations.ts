import { trigger, transition, state, animate, style, query, group, animateChild } from '@angular/animations';
import { delay } from 'q';

export const animamtions = [
    trigger('grow', [
        state('void', style({ height: '0%' , width: '0%', opacity: '0' })),
        transition(':enter, :leave',
            [
                animate('.5s ease-in-out'),
                query('img',
                    animateChild(),
                    {optional: true, delay: '5s'}
                    )])
    ])
];
