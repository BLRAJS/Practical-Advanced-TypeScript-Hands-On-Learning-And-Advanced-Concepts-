import { of, throwError, from } from 'rxjs';
import { catchError, delay, mergeMap, tap } from 'rxjs/operators';

// Simulated API call to fetch account data
function fetchAccountData(accountId: string) {
    return of({ id: accountId, balance: 1000 }).pipe(delay(1000));
}

// Simulated API call to validate user credentials
function validateCredentials(username: string, password: string) {
    return username === 'user' && password === 'password'
        ? of({ status: 'success' }).pipe(delay(500))
        : throwError(new Error('Invalid credentials')).pipe(delay(500));
}

// Simulated API call to transfer funds between accounts
function transferFunds(fromAccountId: string, toAccountId: string, amount: number) {
    return of({ status: 'success', fromAccountId, toAccountId, amount }).pipe(delay(2000));
}

// Example usage
const credentials$ = from(validateCredentials('user', 'password'));
const sourceAccount$ = fetchAccountData('A123');
const destinationAccount$ = fetchAccountData('B456');

credentials$
    .pipe(
        catchError((error) => {
            console.error('Error:', error.message);
            return throwError(error);
        }),
        tap(() => console.log('User validated successfully')),
        mergeMap(() => sourceAccount$),
        tap((account) => console.log('Source account data fetched:', account)),
        mergeMap((sourceAccount) =>
            destinationAccount$.pipe(
                tap((destinationAccount) => console.log('Destination account data fetched:', destinationAccount)),
                mergeMap((destinationAccount) =>
                    transferFunds(sourceAccount.id, destinationAccount.id, 250).pipe(
                        tap((transferResult) => console.log('Funds transferred successfully:', transferResult))
                    )
                )
            )
        )
    )
