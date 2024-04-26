import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import './Registration.css';

function Registration() {
    const [capVal, setCapVal] = useState(null);

    return (
        <main>
            <Form>
                <Form.Group className="mb-3 registration-field" controlId="formBasicEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Введіть Ваш email" required />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="formBasicNumber">
                    <Form.Label><b>Номер телефону</b></Form.Label>
                    <Form.Control type="tel" placeholder="Введіть Ваш номер телефону" required />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="formBasicName">
                    <Form.Label><b>Ім'я</b></Form.Label>
                    <Form.Control type="text" placeholder="Введіть Ваше ім'я" required />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="formBasicSurname">
                    <Form.Label><b>Прізвище</b></Form.Label>
                    <Form.Control type="text" placeholder="Введіть Ваше прізвище" required />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="formBasicPassword">
                    <Form.Label><b>Пароль</b></Form.Label>
                    <Form.Control type="password" placeholder="Введіть пароль" required />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="formBasicConfirmPassword">
                    <Form.Label><b>Підтвердження пароля</b></Form.Label>
                    <Form.Control type="password" placeholder="Введіть пароль ще раз" required />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="formBasicRadio">
                    <Form.Label><b>Роль</b></Form.Label>
                    <Form.Check type="radio" name="choose_role" label="Користувач" required />
                    <Form.Check type="radio" name="choose_role" label="Адмін" />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Я приймаю умови використання даного сайту" required />
                </Form.Group>

                <Form.Group className="mb-3 registration-field" controlId="googleReCaptcha">
                    <ReCAPTCHA 
                        sitekey='6LcxP8gpAAAAAM44Hl7Y9Acce5UlSbU0xhkYtweu'
                        onChange={(val) => setCapVal(val)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!capVal}>
                    Зареєструватися
                </Button>
            </Form>
        </main>
    );
}

export default Registration;