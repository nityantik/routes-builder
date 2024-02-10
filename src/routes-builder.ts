interface Params {
  [key: string]: any;
}
export class RoutesBuilder {
  private path: string = "";
  private parameters: Params = {};
  private queries: Params = {};
  private matcher = /({\b\D\w*})/g;

  public route = (path: string): RoutesBuilder => {
    this.resetProps();
    this.path = path;
    this.extractParams(path);
    return this;
  };

  private resetProps() {
    this.path = "";
    this.parameters = {};
    this.queries = {};
  }

  private extractParams = (path: string) => {
    let parameters = path.match(this.matcher);
    if (parameters)
      parameters.forEach((value) => (this.parameters[value] = null));
  };

  public param = (name: string, value: string | number | boolean) => {
    if (`{${name}}` in this.parameters) {
      this.parameters[`{${name}}`] = String(value);
      return this;
    }
    throw new Error(`{${name}} does not exist in given route`);
  };

  public query(name: string, value: string | number | boolean) {
    this.queries[name] = String(value);
    return this;
  }

  private preparePath = (path: string, parameters: Params): string => {
    Object.keys(parameters).forEach((parameter) => {
      let value = parameters[parameter];
      if (!value) {
        throw new Error(`${parameter} value has not been set`);
      }

      path = path.replace(parameter, value);
    });
    return path;
  };

  private prepareQueries = (queries: Params): string => {
    let result = "";
    Object.keys(queries).forEach((query: string, index: number) => {
      let value = queries[query];
      if (index === 0) {
        result += `?${query}=${value}`;
      } else {
        result += `&${query}=${value}`;
      }
    });
    return result;
  };

  public get = (): string => {
    return (
      this.preparePath(this.path, this.parameters) +
      this.prepareQueries(this.queries)
    );
  };
}

const builder: RoutesBuilder = new RoutesBuilder();

export default builder;
