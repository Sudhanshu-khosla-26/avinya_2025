import { useInView } from "react-intersection-observer";
import LoadingScreen from "@/components/LoadingScreen";

function LazySection({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "100px", // pre-load before visible
    });

    return (
        <div ref={ref}>
            {inView ? children : <LoadingScreen />}
        </div>
    );
}

export default LazySection;