
import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class DonutChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'donut',
                },
                labels: ['Ar condicionado', 'Luz', 'Gasto extra'],
                colors: ['#119ad5', '#efd530', '#d6255a'],
                plotOptions: {
                    pie: {
                        donut: {
                            size: '0%',
                        },
                    },
                },
            },
            seriesData: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('https://673cbfc096b8dcd5f3fb6ea5.mockapi.io/graphicData');
            const data = await response.json();

            const seriesData = data.map((item) => ({
                office: item.office,
                series: [
                    item.airConditioner,
                    item.light,
                    item.waste,
                ],
            }));

            this.setState({
                seriesData,
                loading: false,
            });
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
            this.setState({ loading: false });
        }
    };

    render() {
        const { options, seriesData, loading } = this.state;

        return (
            <div className="m-5">
                <h1 className="text-3xl font-bold text-dark-green mb-5">Gráficos de Dados</h1>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <div className="flex flex-col xl:flex-row gap-y-2 xl:gap-2 justify-center">
                        {seriesData.map((data) => (
                            <div key={data.office} className="bg-light-green text-olive-green font-semibold rounded-lg p-1 xl:p-3">
                                <div className="bg-color-white p-1 xl:p-3 rounded-lg">
                                    <h2 className="text-lg">{data.office}:</h2>
                                    <Chart options={options} series={data.series} type="donut" className="w-64 xl:w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}