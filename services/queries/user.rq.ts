import { useQuery } from "@tanstack/react-query";

import * as userApis from "../apis/user.api";
import * as IFs from "../interfaces/user.interfaces";

export function getUserQuery(_data: IFs.IGetUserApi) {
  const result = useQuery({
    queryKey: ["repoData"],
    queryFn: () => userApis.getUserApi(_data),
  });

  return result;
}
