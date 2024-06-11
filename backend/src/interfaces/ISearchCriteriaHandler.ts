export interface ISearchCriteriaHandler<TArgs, TOutput> {
  searchCriteriaArgs: TArgs

  buildWhere(): TOutput
}
