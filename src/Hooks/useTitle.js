import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}--Go food`
    }, [title])
}

export default useTitle;