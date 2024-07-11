import useData from "./useData";

interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useData<ParentPlatforms>("/platforms/lists/parents");

export default usePlatform;
