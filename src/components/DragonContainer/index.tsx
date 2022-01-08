import Button from 'components/Button';
import Card from 'components/Card';
import Form from 'components/Form';
import SelectInput from 'components/SelectInput';
import TextInput from 'components/TextInput';
import { dragonTypes } from 'content';
import { useApp } from 'contexts/AppContext';
import { getIn, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import dragonSchema from 'schemas/dragon';
import dragonService from 'services/dragon';
import { IDragon } from 'types';

type TDragonContainerProps = {
  data?: IDragon;
};

const DragonContainer = ({ data }: TDragonContainerProps) => {
  const { setLoading, setErrorMessage, setSuccessMessage } = useApp();
  const navigate = useNavigate();

  const { getFieldProps, errors, touched, handleSubmit, values } = useFormik({
    initialValues: { ...dragonSchema.getDefault(), ...data },
    validationSchema: dragonSchema,
    onSubmit: async (val) => {
      setLoading(true);
      try {
        if (val.id) {
          await dragonService.edit(val as IDragon);
          setSuccessMessage('Dragão editado com sucesso!');
        } else {
          await dragonService.save({ name: val.name, type: val.type });
          setSuccessMessage('Dragão adicionado com sucesso!');
        }
        navigate('/app');
      } catch (err) {
        setErrorMessage('Erro ao salvar dragão');
      }
      setLoading(false);
    },
  });

  const getErrorByKey = (key: string) => {
    const touch = getIn(touched, key);
    if (!touch) return '';
    const err = getIn(errors, key);
    if (!err) return '';
    return err as string;
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <TextInput
          label="Nome"
          errorText={getErrorByKey('name')}
          {...getFieldProps('name')}
        />
        <SelectInput
          label="Tipo"
          errorText={getErrorByKey('type')}
          {...getFieldProps('type')}
          options={dragonTypes.map((type) => ({
            value: type,
            label: type,
          }))}
        />
        {!!values.createdAt && (
          <TextInput
            name="createdAt"
            value={values.createdAt.toLocaleDateString('pt-BR')}
            label="Data de criação"
            disabled
          />
        )}
        <Button variant="contained" type="submit">
          Salvar
        </Button>
      </Form>
    </Card>
  );
};

export default DragonContainer;
