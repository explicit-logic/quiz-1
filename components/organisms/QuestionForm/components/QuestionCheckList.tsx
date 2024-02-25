// Types
import type { Formik } from '../QuestionForm.types';
import type { Parse } from '@/lib/client/markdownRender/markdownRender.types';

export type Props = {
  formik: Formik;
  parse: Parse;
  token: Tokens.List;
};

export default function QuestionCheckList(props: Props) {
  const { formik, parse, token } = props;
  const time = new Date().getTime();

  return (
    <fieldset>
      {token.items.map((item, index) => {
        const id = `${time}-${index}`;
        const value = index.toString();

        return (
          <div key={id} className="flex items-center mb-4">
            <input
              id={id}
              type="checkbox"
              name={id}
              onChange={formik.handleChange}
              value={value}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              // checked={formik.values[name] === value}
            />
            <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {parse(item.tokens)}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
