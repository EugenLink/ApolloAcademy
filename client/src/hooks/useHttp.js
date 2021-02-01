import { useCallback} from 'react'
import {setLoading, setError} from "../state_management";

export const useHttp = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        setLoading(true)

        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()


          if (response.status !== 200) {
              setError(data.message)
          }

          setLoading(false);

          return response;

        } catch (e) {
            setLoading(false);
            setError(e);
            throw e;
        }
    }, [])

    const clearError = useCallback(() => setError(false), [])

    return {request, clearError}
}

