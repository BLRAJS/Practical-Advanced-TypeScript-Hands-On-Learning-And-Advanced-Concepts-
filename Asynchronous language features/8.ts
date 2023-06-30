import { fromEvent, interval } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';

const inputElement = document.getElementById('search-input');
const stopButton = document.getElementById('stop-button');

const input$ = fromEvent(inputElement, 'input');
const stop$ = fromEvent(stopButton, 'click');

input$
    .pipe(
        debounceTime(500),
        map((event: any) => event.target.value),
        distinctUntilChanged(),
        filter((searchTerm: string) => searchTerm.length > 2),
        switchMap((searchTerm: string) =>
            interval(1000).pipe(
                map(() => `Searching for: ${searchTerm}`),
                takeUntil(stop$)
            )
        )
    )
    .subscribe(console.log);
