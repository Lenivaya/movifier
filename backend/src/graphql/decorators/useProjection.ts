import { MiddlewareFn, UseMiddleware } from 'type-graphql'
import { PrismaSelect } from '@paljs/plugins'

// export function UseProjection() {
//   return createMethodDecorator(async ({ args, context, info }, next) => {
//     const select = new PrismaSelect(info).value;
//
//     // console.log(select.select.movieInfo);
//     // console.log(args);
//     // args.select = { ...args.select, ...select.select };
//     // console.log(args);
//     args.select = select.select;
//     // Object.assign(args, D.merge(args, select));
//     console.log(args);
//
//     return next();
//   });
// }

const ProjectionMiddleWare: MiddlewareFn = async ({ args, info }, next) => {
  const select = new PrismaSelect(info).value
  args.select = select.select
  return next()
}

export const UseProjection = () => UseMiddleware(ProjectionMiddleWare)
